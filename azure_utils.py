import os
import time
import json
import random
from dotenv import load_dotenv

# Try to import Azure libraries
try:
    from azure.ai.vision.imageanalysis import ImageAnalysisClient
    from azure.ai.vision.imageanalysis.models import VisualFeatures
    from azure.core.credentials import AzureKeyCredential
    import azure.cognitiveservices.speech as speechsdk
    from openai import AzureOpenAI
    AZURE_INSTALLED = True
except ImportError:
    AZURE_INSTALLED = False

load_dotenv()

# LANGUAGE MAPPING
LANG_MAP = {
    "English": "en-US",
    "Hindi (हिंदी)": "hi-IN",
    "Marathi (मराठी)": "mr-IN",
    "Tamil (தமிழ்)": "ta-IN",
    "Spanish (Español)": "es-ES",
    "French (Français)": "fr-FR"
}

# BRAND NAME MAPPING
BRAND_NAME_MAP = {
    "English": "Kisan Trust",
    "Hindi (हिंदी)": "किसान ट्रस्ट",
    "Marathi (मराठी)": "किसान ट्रस्ट",
    "Tamil (தமிழ்)": "கிசான் நம்பிக்கை",
    "Spanish (Español)": "Confianza Kisan",
    "French (Français)": "Confiance Kisan"
}

# VOICE PERSONALITIES
VOICE_MAP = {
    "en-US": "en-IN-NeerjaNeural",
    "hi-IN": "hi-IN-MadhurNeural",  # Changed to male voice for authority
    "mr-IN": "mr-IN-ManoharNeural",  # Male voice
    "ta-IN": "ta-IN-ValluvarNeural",  # Male voice
    "es-ES": "es-ES-AlvaroNeural",  # Male voice
    "fr-FR": "fr-FR-HenriNeural"  # Male voice
}

# PRICE TEMPLATES FOR DIFFERENT LANGUAGES
PRICE_TEMPLATES = {
    "English": [
        "Based on the excellent quality of your {vegetable}, the market price is {market_price}. After deducting transport and platform fees, you receive {farmer_price}. This is {percentage}% better than average market rates.",
        "Your {vegetable} shows premium quality with good color and size. Market rate: {market_price}. Your direct price: {farmer_price}. You save {savings} compared to traditional channels."
    ],
    "Hindi (हिंदी)": [
        "आपकी {vegetable} की उत्कृष्ट गुणवत्ता के आधार पर, बाजार मूल्य {market_price} है। परिवहन और प्लेटफ़ॉर्म शुल्क काटने के बाद, आपको {farmer_price} मिलते हैं। यह औसत बाजार दरों से {percentage}% बेहतर है।",
        "आपकी {vegetable} का रंग और आकार उत्तम है। बाजार भाव: {market_price}. आपका सीधा मूल्य: {farmer_price}. आप पारंपरिक चैनलों की तुलना में {savings} बचाते हैं।"
    ],
    "Marathi (मराठी)": [
        "तुमच्या {vegetable} च्या उत्तम गुणवत्तेच्या आधारे, बाजारभाव {market_price} आहे. वाहतूक आणि प्लॅटफॉर्म फी वजा केल्यानंतर, तुम्हाला {farmer_price} मिळतात. हे सरासरी बाजार दरापेक्षा {percentage}% चांगले आहे.",
        "तुमच्या {vegetable} चा रंग आणि आकार उत्तम आहे. बाजार भाव: {market_price}. तुमचा थेट भाव: {farmer_price}. तुम्ही पारंपरिक चॅनेलच्या तुलनेत {savings} वाचवता."
    ],
    "Tamil (தமிழ்)": [
        "உங்கள் {vegetable} அருமையான தரத்தைக் கொண்டுள்ளது, சந்தை விலை {market_price}. போக்குவரத்து மற்றும் தளக் கட்டணங்களைக் கழித்த பிறகு, நீங்கள் {farmer_price} பெறுகிறீர்கள். இது சராசரி சந்தை விகிதங்களை விட {percentage}% சிறந்தது.",
        "உங்கள் {vegetable} நிறம் மற்றும் அளவு சிறந்தது. சந்தை விலை: {market_price}. உங்கள் நேரடி விலை: {farmer_price}. நீங்கள் பாரம்பரிய சேனல்களுடன் ஒப்பிடும்போது {savings} சேமிக்கிறீர்கள்."
    ],
    "Spanish (Español)": [
        "Basado en la excelente calidad de su {vegetable}, el precio de mercado es {market_price}. Después de deducir los gastos de transporte y de la plataforma, usted recibe {farmer_price}. Esto es un {percentage}% mejor que las tasas promedio del mercado.",
        "Su {vegetable} muestra calidad premium con buen color y tamaño. Precio de mercado: {market_price}. Su precio directo: {farmer_price}. Ahorra {savings} en comparación con los canales tradicionales."
    ],
    "French (Français)": [
        "Sur la base de l'excellente qualité de votre {vegetable}, le prix du marché est de {market_price}. Après déduction des frais de transport et de plateforme, vous recevez {farmer_price}. C'est {percentage}% mieux que les taux moyens du marché.",
        "Votre {vegetable} présente une qualité premium avec une bonne couleur et taille. Prix du marché : {market_price}. Votre prix direct : {farmer_price}. Vous économisez {savings} par rapport aux canaux traditionnels."
    ]
}

class AzureServices:
    def __init__(self):
        self.vision_key = os.getenv("VISION_KEY")
        self.vision_endpoint = os.getenv("VISION_ENDPOINT")
        self.speech_key = os.getenv("SPEECH_KEY")
        self.speech_region = os.getenv("SPEECH_REGION")
        self.openai_key = os.getenv("AZURE_OPENAI_KEY")
        
        # Check if we have minimal keys to run real mode
        self.is_demo_mode = not (self.vision_key and self.speech_key and self.openai_key and AZURE_INSTALLED)
        
        # Vegetable detection patterns
        self.vegetable_patterns = {
            "tomato": ["tomato", "tomatoes", "टमाटर", "तमाटर", "தக்காளி"],
            "potato": ["potato", "potatoes", "आलू", "बटाटा", "உருளைக்கிழங்கு"],
            "onion": ["onion", "onions", "प्याज", "कांदा", "வெங்காயம்"],
            "carrot": ["carrot", "carrots", "गाजर", "गाजर", "கேரட்"],
            "cabbage": ["cabbage", "cabbages", "पत्ता गोभी", "कोबी", "முட்டைகோஸ்"]
        }

    def detect_vegetable_type(self, description):
        """Detect vegetable type from description"""
        desc_lower = description.lower()
        for veg, patterns in self.vegetable_patterns.items():
            for pattern in patterns:
                if pattern.lower() in desc_lower:
                    return veg
        return "vegetable"

    def analyze_vegetables_batch(self, image_list):
        """
        Analyze images for vegetable features
        """
        if not image_list:
            return {"error": "No images provided"}

        if self.is_demo_mode:
            time.sleep(2)
            vegetable_type = random.choice(["tomato", "potato", "onion", "carrot"])
            quality_score = random.randint(75, 95)
            return {
                "description": f"Demo: 4 images of fresh {vegetable_type}s, consistent size and good color.",
                "quality_check": "Excellent" if quality_score > 85 else "Good",
                "quality_score": quality_score,
                "count": len(image_list),
                "detected_vegetable": vegetable_type,
                "freshness_level": random.choice(["Very Fresh", "Fresh", "Moderate"])
            }

        # REAL MODE: Analyze the first image with multiple features
        try:
            client = ImageAnalysisClient(
                endpoint=self.vision_endpoint,
                credential=AzureKeyCredential(self.vision_key)
            )
            
            # Analyze with multiple features
            first_image = image_list[0].getvalue()
            result = client.analyze(
                image_data=first_image,
                visual_features=[
                    VisualFeatures.CAPTION,
                    VisualFeatures.TAGS,
                    VisualFeatures.OBJECTS
                ]
            )
            
            # Determine vegetable type
            detected_veg = self.detect_vegetable_type(result.caption.text)
            
            # Calculate quality score based on analysis
            quality_score = 80  # Base score
            if result.tags:
                quality_score += len([t for t in result.tags if t.name in ['fresh', 'green', 'ripe']]) * 5
            
            quality_check = "Excellent" if quality_score > 90 else "Good" if quality_score > 75 else "Average"
            
            return {
                "description": result.caption.text,
                "quality_check": quality_check,
                "quality_score": quality_score,
                "count": len(image_list),
                "detected_vegetable": detected_veg,
                "freshness_level": "Fresh" if quality_score > 80 else "Moderate"
            }
        except Exception as e:
            return {"error": str(e)}

    def get_fair_price(self, vision_result, language_name):
        """
        Generate fair price based on quality logic
        """
        desc = vision_result.get("description", "")
        vegetable = vision_result.get("detected_vegetable", "vegetable")
        quality = vision_result.get("quality_check", "Good")
        quality_score = vision_result.get("quality_score", 80)
        
        if self.is_demo_mode:
            time.sleep(1.5)
            
            # Generate dynamic prices based on quality
            base_price = random.randint(30, 50)
            transport_cost = random.randint(2, 5)
            platform_fee = random.randint(1, 3)
            farmer_price = base_price - transport_cost - platform_fee
            
            # Select appropriate template
            templates = PRICE_TEMPLATES.get(language_name, PRICE_TEMPLATES["English"])
            template = random.choice(templates)
            
            explanation = template.format(
                vegetable=vegetable,
                market_price=f"₹{base_price}",
                farmer_price=f"₹{farmer_price}",
                percentage=round((base_price - farmer_price) / base_price * 100, 1),
                savings=f"₹{transport_cost + platform_fee}"
            )
            
            return {
                "market_price": f"₹{base_price}",
                "farmer_price": f"₹{farmer_price}",
                "explanation": explanation,
                "savings": f"₹{transport_cost + platform_fee}",
                "quality_bonus": f"+₹{quality_score - 75}" if quality_score > 75 else "",
                "vegetable_type": vegetable.capitalize()
            }

        try:
            client = AzureOpenAI(
                azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
                api_key=os.getenv("AZURE_OPENAI_KEY"),
                api_version="2024-02-01"
            )

            # Generate prompt
            prompt = f"""
            Act as a friendly agricultural pricing expert from India. 
            
            CONTEXT:
            - Vegetable detected: {vegetable}
            - Quality assessment: {quality} (Score: {quality_score}/100)
            - Description: "{desc}"
            - Target language: {language_name}
            
            PRICING LOGIC:
            1. Base Market Price: ₹40 (standard for {vegetable})
            2. Quality Adjustment: Add ₹2 for Excellent, ₹1 for Good, ₹0 for Average
            3. Transport Cost: ₹2
            4. Platform Fee: ₹1
            5. Farmer Price = (Market Price + Quality Bonus) - Transport - Platform Fee
            
            OUTPUT REQUIREMENT:
            Return a VALID JSON object with these exact keys:
            1. "market_price": "₹[calculated market price]"
            2. "farmer_price": "₹[final farmer price]"
            3. "explanation": "A friendly, culturally appropriate 2-3 sentence explanation in {language_name}. Use local terms if possible."
            4. "savings": "₹[total savings]"
            5. "quality_bonus": "₹[bonus amount]"
            6. "vegetable_type": "{vegetable}"
            
            Make the explanation warm, encouraging, and educational for the farmer.
            """

            response = client.chat.completions.create(
                model=os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME"),
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7
            )
            
            content = response.choices[0].message.content
            # Clean JSON markdown if present
            content = content.replace("```json", "").replace("```", "").strip()
            
            try:
                result = json.loads(content)
                # Ensure all required fields exist
                if "savings" not in result:
                    result["savings"] = "₹3"
                if "quality_bonus" not in result:
                    result["quality_bonus"] = f"+₹{max(0, quality_score - 75)}"
                if "vegetable_type" not in result:
                    result["vegetable_type"] = vegetable
                    
                return result
            except json.JSONDecodeError:
                # Fallback if JSON parsing fails
                return {
                    "market_price": "₹40",
                    "farmer_price": "₹37",
                    "explanation": f"({language_name}) Your {vegetable} looks good quality. Market price is ₹40, you get ₹37 after fees. This is a fair deal!",
                    "savings": "₹3",
                    "quality_bonus": f"+₹{max(0, quality_score - 75)}",
                    "vegetable_type": vegetable
                }

        except Exception as e:
            return {
                "market_price": "₹40",
                "farmer_price": "₹37",
                "explanation": f"We're calculating your best price. Default offer: ₹37 for your {vegetable}.",
                "error": str(e)
            }

    def text_to_speech(self, text, language_name):
        """
        Text to speech generation
        """
        if self.is_demo_mode:
            return None

        try:
            locale = LANG_MAP.get(language_name, "en-US")
            voice_name = VOICE_MAP.get(locale, "en-US-AvaNeural")

            speech_config = speechsdk.SpeechConfig(
                subscription=self.speech_key, 
                region=self.speech_region
            )
            speech_config.speech_synthesis_voice_name = voice_name
            speech_config.set_speech_synthesis_output_format(
                speechsdk.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3
            )
            
            # Add speaking style for farmer-friendly tone
            ssml = f"""
            <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="{locale.split('-')[0]}">
                <voice name="{voice_name}">
                    <prosody rate="medium" pitch="+0Hz">
                        <break time="300ms"/>
                        {text}
                        <break time="500ms"/>
                    </prosody>
                </voice>
            </speak>
            """
            
            file_name = f"output_audio_{int(time.time())}.mp3"
            audio_config = speechsdk.audio.AudioOutputConfig(filename=file_name)
            
            synthesizer = speechsdk.SpeechSynthesizer(
                speech_config=speech_config, 
                audio_config=audio_config
            )
            
            result = synthesizer.speak_ssml_async(ssml).get()
            
            if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
                return file_name
            return None
        except Exception as e:
            print(f"TTS Error: {e}")
            return None