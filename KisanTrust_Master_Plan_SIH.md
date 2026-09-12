# AgriLink — Master Product Improvement Plan
## SIH-Ready, Farmer-First, Mobile-First Roadmap

**Purpose:** Transform the current AgriLink prototype into a polished, credible, farmer-first market-linkage platform that directly addresses the SIH problem statement and is strong enough for a live judging/demo environment.

**Core principle:** Do not keep adding disconnected features. First make the existing product coherent and reliable, then close the SIH-critical gaps, then strengthen trust, intelligence, and polish.

---

# 0. Product North Star

AgriLink should make one promise extremely clear:

> **Help a farmer decide where, when, and to whom to sell, based on price, demand, quality, logistics, storage, and expected net realization.**

The ideal end-to-end journey should be:

**Farmer**
→ adds crop/lot  
→ uploads crop photos  
→ receives quality assessment  
→ sees nearby mandi prices and arrivals  
→ sees buyer demand  
→ sees transport options/cost  
→ sees storage options/cost  
→ receives a recommended selling window  
→ sees expected net realization  
→ gets matched with verified buyers  
→ creates/publishes lot  
→ receives offers  
→ negotiates/selects buyer  
→ arranges logistics  
→ completes delivery  
→ tracks payment  
→ receives digital receipt  
→ can raise a dispute if needed

Every major screen should support this journey.

---

# STAGE 1 — PRODUCT FREEZE, CLEANUP & BASELINE
## Priority: P0
## Goal: Stop unfinished/contradictory states from damaging credibility.

### Deliverables

- Remove all visibly unfinished placeholders such as:
  - `₹--`
  - `Loading...` when data is not actually loading
  - blank data-source fields
  - empty charts without explanation
  - fake-looking transaction IDs where inappropriate
- Replace unsupported claims with accurate wording.
- Clearly distinguish:
  - live data
  - latest available data
  - simulated/demo data
  - AI estimates
  - verified/certified information
- Remove any real-looking or sensitive financial/payment information from the public demo.
- Clearly mark payment demonstrations as simulations unless genuine regulated payment functionality exists.
- Audit every page for dead buttons, non-functional controls, incomplete forms, broken navigation, and misleading interactions.
- Standardize date, time, currency, weight, distance, and location formatting.
- Ensure every important section has proper:
  - loading state
  - empty state
  - error state
  - success state
- Remove duplicate features or screens that provide the same purpose.
- Create a single list of all current features and classify each as:
  - working
  - partially working
  - mock/demo
  - broken
  - missing

### Exit criteria

- No visible unfinished UI on the main farmer journey.
- No misleading live-data or payment claims.
- Every primary action either works or is clearly marked as demo.
- A first-time visitor can understand what is real and what is simulated.

---

# STAGE 2 — MOBILE-FIRST REDESIGN & RESPONSIVENESS
## Priority: P0
## Goal: Make the product genuinely usable by a farmer on a phone.

### Deliverables

- Fully redesign the mobile information hierarchy rather than simply shrinking desktop screens.
- Validate the product at common phone widths and orientations.
- Fix:
  - navigation
  - dashboard cards
  - forms
  - tables
  - charts
  - modals
  - filters
  - image upload
  - camera capture
  - buyer cards
  - negotiations
  - payments
  - receipts
  - dispute screens
- Introduce a simple mobile navigation model centered on:
  - Home
  - Market
  - Lots
  - Buyers
  - More
- Give the farmer one obvious primary action on the home screen.
- Make crop-photo upload/capture especially reliable and easy.
- Replace wide desktop tables with mobile-friendly cards, summaries, and expandable details.
- Ensure all important controls are comfortably tappable.
- Reduce long scrolling sections on high-frequency workflows.
- Keep critical information visible without forcing the user through multiple dense screens.
- Improve mobile keyboard/form behavior.
- Ensure charts remain understandable on small screens.
- Add low-bandwidth-friendly behavior and graceful handling of poor connectivity where practical.

### Farmer-first mobile home

The first screen should quickly answer:

1. What is my crop worth?
2. What are buyers offering?
3. Should I sell now or wait?
4. What should I do next?

### Exit criteria

- Complete core farmer journey can be performed on a phone.
- No horizontal overflow or broken responsive components.
- Camera/photo workflow works properly.
- Primary farmer tasks require minimal typing and navigation.

---

# STAGE 3 — ROLE-BASED PRODUCT STRUCTURE
## Priority: P0
## Goal: Stop the entire application from feeling like one giant dashboard.

### Deliverables

Create clear experiences for:

## Farmer

- Home
- My Lots
- Market
- Buyers
- Transport
- Transactions
- Profile/Support

## Buyer

- Dashboard
- Demand
- Recommended Lots
- Offers
- Purchases
- Payments
- Profile/Verification

## FPO

- Dashboard
- Farmers/Members
- Aggregate Lots
- Buyer Demand
- Market Intelligence
- Logistics
- Transactions
- Reports

## Admin

- Dashboard
- Farmer Verification
- Buyer Verification
- Lot Moderation
- Quality/AI Review
- Disputes
- Payments
- Risk Flags
- Audit Logs

### Deliverables for navigation

- Separate role-based navigation.
- Consistent page titles and breadcrumbs where useful.
- Remove admin/technical concepts from farmer-facing screens.
- Keep advanced data available without overwhelming the default view.

### Exit criteria

- A farmer never sees irrelevant admin/buyer operations.
- A buyer can complete buyer tasks without entering farmer workflows.
- FPO operations are clearly different from individual farmer operations.
- Admin has a dedicated operational workspace.

---

# STAGE 4 — FARMER HOME & DECISION ENGINE
## Priority: P1
## Goal: Make AgriLink's unique value obvious within seconds.

### Deliverables

Build a farmer home screen centered on a single **"Best Action Today"** area.

Example structure:

- Current crop
- Current best price
- Best buyer offer
- Estimated net realization
- Current demand
- Price direction
- Recommended action
- Confidence/explanation

### The home page should surface

- My active crop/lots
- Best current selling opportunity
- Price trend
- Buyer demand
- Nearby mandi comparison
- Transport estimate
- Storage availability
- Alerts
- Pending actions

### Opportunity Score

Replace unexplained scores with an explainable breakdown.

The interface should answer:

- Why is this score high/low?
- Which factors helped?
- Which factors hurt?
- What can the farmer change?

### Exit criteria

- A farmer can understand the recommended action without opening multiple pages.
- Every recommendation is explainable.
- The homepage feels like a decision assistant rather than a feature catalog.

---

# STAGE 5 — MARKET INTELLIGENCE COMPLETION
## Priority: P1
## Goal: Fully deliver the price-discovery side of the SIH problem.

### Deliverables

For each relevant mandi/market, show where available:

- Market name
- Commodity
- Variety
- Grade/quality
- Minimum price
- Maximum price
- Modal/representative price
- Arrival volume
- Date/time of data
- Market distance
- Price trend
- Arrival trend
- Source

### Price trend

- 7-day trend
- 30-day trend where useful
- Clear up/down/stable indicator
- Simple visual explanation
- Avoid charts that look impressive but do not help decisions

### Arrival intelligence

Show how arrivals relate to prices.

Example:

> Arrivals increased 18% this week while modal price fell 6%.

### Market comparison

Allow the farmer to compare:

- local mandi
- nearby mandi
- buyer offer
- estimated net realization

### Data transparency

Every market-data module should show:

- source
- last updated
- coverage date
- whether the value is live or latest available

### Exit criteria

- No placeholder market data in the demo path.
- Arrival volume is visible where available.
- Price trend and arrival trend support actual decisions.
- Farmer can clearly compare selling alternatives.

---

# STAGE 6 — STORAGE MODULE
## Priority: P1 — Major SIH Gap
## Goal: Turn "storage cost" into a real storage decision capability.

### Deliverables

Create a storage section with:

- Nearby storage facilities
- Facility type
- Distance
- Available capacity
- Total capacity
- Current availability
- Storage cost
- Suitable crop/category
- Storage conditions where relevant
- Expected duration supported
- Contact/booking status
- Verification status

### Storage decision integration

Connect storage with:

- crop shelf-life estimate
- current price
- expected price trend
- transport cost
- storage cost
- spoilage risk

### Example recommendation

> Current price is low, but your crop has adequate expected holding time. Storage for 2 days may improve expected realization.

### Exit criteria

- Storage is a genuine product workflow, not just a cost line.
- Storage appears in the final sell/hold decision.
- Cost and benefit are visible together.

---

# STAGE 7 — SALE-WINDOW INTELLIGENCE
## Priority: P1
## Goal: Make "when should I sell?" a first-class feature.

### Deliverables

Build a **Recommended Selling Window**.

It should consider, where data exists:

- current mandi price
- price direction
- arrival direction
- buyer demand
- crop quality
- estimated shelf-life
- storage cost
- transport cost
- buyer deadlines
- expected net realization

### Output

Present:

- Sell now
- Sell within X days
- Hold temporarily
- Reassess on a specific date

Show:

- expected price range
- expected net realization
- downside risk
- major reasons
- recommendation confidence

### Exit criteria

- Farmer gets a clear recommendation rather than only raw price data.
- Recommendation is tied to measurable inputs.
- Recommendation does not pretend to be a guarantee.

---

# STAGE 8 — BUYER MARKETPLACE & MATCHING
## Priority: P1
## Goal: Build a credible demand-side marketplace.

### Buyer profiles should show

- Buyer name
- Verification status
- Commodity demand
- Grade/quality requirements
- Quantity required
- Price/offer range
- Required date
- Location
- Pickup availability
- Reliability indicators
- Completed purchases
- Payment behavior where legitimately available
- Rating/reputation

### Matching

Create a "Recommended Buyers" experience based on:

- commodity
- quantity
- quality
- location
- price
- required date
- pickup capability
- farmer preference

### Matching explanation

Each match should answer:

> Why this buyer?

Example factors:

- quality match
- price advantage
- distance
- buyer demand
- pickup availability
- reliability

### Exit criteria

- Marketplace looks and behaves like an actual marketplace.
- Farmers can understand why a buyer is recommended.
- Verified status has visible meaning.

---

# STAGE 9 — BUYER VERIFICATION & TRUST
## Priority: P1
## Goal: Reduce risk and strengthen transaction confidence.

### Deliverables

Create a clear verification model.

Potential indicators:

- identity/business verification
- GST/business verification where applicable
- contact verification
- operating history
- successful transactions
- payment reliability
- dispute history where appropriate
- platform reliability score

### Verification levels

Define a simple visual system such as:

- Verified
- Partially verified
- Pending verification

Avoid making claims that the platform has verified something unless it actually has.

### Exit criteria

- Farmers can evaluate buyers before accepting offers.
- Buyer trust is more than a badge; it has understandable supporting evidence.

---

# STAGE 10 — FPO AGGREGATION
## Priority: P1 — Major SIH Gap
## Goal: Make aggregation a first-class workflow.

### Deliverables

## FPO dashboard

Show:

- registered members
- active farmers
- active lots
- total commodity volume
- aggregated volume
- pending buyer demand
- active transport
- expected sales

## Aggregated lots

Allow an FPO to:

- select farmer lots
- combine compatible produce
- group by commodity/variety/quality
- build an aggregated lot
- publish the lot to buyers

## Demand fulfillment

Example:

Buyer requirement:
- 20 tonnes Grade A tomato

FPO view:
- Farmer A: 4T
- Farmer B: 3T
- Farmer C: 7T
- Farmer D: 6T
- Aggregated: 20T

### Exit criteria

- FPO can move from multiple individual lots to one buyer-ready aggregated lot.
- FPO value is visible to judges and farmers.

---

# STAGE 11 — QUALITY & ASSAYING EXPERIENCE
## Priority: P1
## Goal: Make AI useful without overstating what it can certify.

### Deliverables

Separate clearly:

## AI visual assessment

Possible outputs:

- visible defects
- bruising
- discoloration
- uniformity
- visible damage
- estimated visual quality
- confidence

## Formal/certified quality information

Where supported, show:

- assay result
- grade
- certificate/status
- source
- date

### AI language

Avoid presenting photo-based estimates as definitive laboratory/certified facts.

Use clear wording such as:

- estimated
- visual assessment
- advisory
- confidence
- not a certified assay

### Quality history

Maintain a record connecting:

- original photos
- assessment
- final published grade
- buyer feedback
- dispute evidence

### Exit criteria

- AI value is believable and transparent.
- Judges cannot easily challenge the product for pretending visual AI is a formal lab certificate.

---

# STAGE 12 — SMART LOGISTICS
## Priority: P1
## Goal: Turn freight pooling into an actual operational flow.

### Deliverables

Show:

- farmer shipment
- destination
- distance
- load size
- available vehicle
- estimated cost
- pickup date/time
- pooled shipment opportunities
- cost before pooling
- pooled cost
- savings

### Pooling workflow

- Discover compatible nearby shipments.
- Show combined quantity.
- Show route.
- Show estimated shared cost.
- Show per-farmer share.
- Let the farmer join/leave a pool.
- Track shipment status.

### Cost claims

Do not use blanket savings claims.

Instead show a calculation:

> Individual estimate: ₹X  
> Pooled estimate: ₹Y  
> Estimated saving: ₹Z / X%

### Exit criteria

- Farmer understands what happens after clicking "Join Pool".
- Logistics is tied directly to net realization.

---

# STAGE 13 — LOT CREATION, OFFERS & NEGOTIATION
## Priority: P1
## Goal: Make the transaction core feel real.

### Deliverables

## Lot creation

Collect only necessary information first:

- commodity
- variety
- quantity
- location
- expected quality
- images
- harvest date
- availability date
- preferred selling date
- optional notes

Then enrich the lot with system-generated intelligence.

## Lot page

Show:

- quantity
- quality
- photos
- location
- estimated shelf-life
- current market price
- expected net realization
- recommended buyers
- offers

## Offers

Each offer should show:

- buyer
- price
- quantity
- pickup terms
- required date
- payment terms
- validity/expiry
- verification level

## Negotiation

Support:

- counter-offer
- accepted
- rejected
- expired
- history

### Exit criteria

- A farmer can go from lot creation to an actual buyer offer without confusion.
- Offer history is transparent.

---

# STAGE 14 — TRANSACTION, PAYMENT & DIGITAL RECEIPT
## Priority: P1
## Goal: Make the post-sale process trustworthy.

### Deliverables

Create a transaction timeline:

**Offer accepted**
→ **Order confirmed**
→ **Pickup scheduled**
→ **Delivery confirmed**
→ **Payment initiated**
→ **Payment released**
→ **Completed**

### Important credibility rule

If payments are simulated:

- label them as simulation/demo
- do not expose real financial credentials
- do not imply a regulated escrow service exists if it does not

### Receipt

Provide a digital transaction summary containing:

- transaction ID
- farmer
- buyer
- commodity
- quantity
- agreed rate
- gross amount
- applicable costs
- net realization
- delivery details
- payment status
- date/time

### Exit criteria

- Transaction state is understandable at every stage.
- Payment language is accurate and defensible.

---

# STAGE 15 — DISPUTE & GRIEVANCE SYSTEM
## Priority: P1
## Goal: Finish the transaction lifecycle.

### Deliverables

Create a structured dispute flow:

- Raise dispute
- Select issue type
- Add evidence
- Submit
- Under review
- Request additional evidence
- Decision
- Resolved/appeal status where supported

### Evidence

Where legitimately available, connect:

- original lot images
- AI assessment
- quality/assay result
- weighment record
- delivery confirmation
- timestamps
- agreed terms
- transaction history

### Admin resolution

Admin should be able to see a complete case timeline.

### Exit criteria

- Disputes feel like a real workflow, not a decorative feature.
- Evidence is organized and traceable.

---

# STAGE 16 — ALERTS, NOTIFICATIONS & ACTION QUEUE
## Priority: P1
## Goal: Make the platform useful between sessions.

### Deliverables

Farmer alerts:

- price changed significantly
- buyer offer received
- recommended sale window approaching
- storage availability changed
- pooled transport available
- lot approved/rejected
- payment state changed
- dispute state changed

### Action queue

Create a single "What needs your attention?" component.

Example:

- Accept buyer offer
- Complete lot details
- Upload missing photo
- Confirm pickup
- Confirm delivery

### Exit criteria

- Notifications lead to clear actions.
- Important events are not buried inside dashboards.

---

# STAGE 17 — LANGUAGE, ACCESSIBILITY & FARMER USABILITY
## Priority: P1
## Goal: Make the product genuinely inclusive.

### Deliverables

Support complete, consistent:

- English
- Hindi
- Marathi

Do not leave mixed-language fragments across the same screen.

### Accessibility

- large readable numbers
- clear labels
- strong contrast
- large touch targets
- icons paired with text
- simple wording
- voice assistance for important information
- minimize typing
- camera-first workflows
- avoid unnecessary technical terminology

### Voice assistance

High-value content that can be spoken:

- mandi price
- buyer offer
- recommendation
- lot status
- payment status

### Exit criteria

- Language switch changes the whole relevant experience, not just isolated labels.
- A user with limited technical familiarity can navigate the major workflow.

---

# STAGE 18 — DATA CREDIBILITY & EXPLANABILITY
## Priority: P1
## Goal: Make every important number believable.

### Deliverables

For every major metric, define:

- source
- timestamp
- unit
- calculation basis
- update frequency where relevant
- whether estimated or observed

### Calculations to explain

At minimum:

- net realization
- opportunity score
- buyer match
- transport savings
- expected storage benefit
- sale-window recommendation

### Example

**Net realization**

Gross sale value  
− transport  
− loading/handling  
− storage  
− marketplace/platform charges if any  
= **Estimated net realization**

### Exit criteria

- Judges can ask "How did you calculate this?" and the UI itself provides a credible explanation.

---

# STAGE 19 — PERFORMANCE, RELIABILITY & ERROR EXPERIENCE
## Priority: P1
## Goal: Make the application feel production-ready.

### Deliverables

- Fast initial load.
- Optimize image handling.
- Prevent unnecessary repeated data fetching.
- Handle API failures gracefully.
- Handle slow network conditions gracefully.
- Prevent form data loss.
- Prevent duplicate submissions.
- Show clear retry actions.
- Preserve user progress in multi-step workflows where appropriate.

### Exit criteria

- Temporary data failure does not make the whole interface look broken.
- Core workflow remains understandable even when one service is unavailable.

---

# STAGE 20 — VISUAL UI POLISH
## Priority: P2
## Goal: Move from "student prototype" to "serious product."

### Visual cleanup

- Reduce excessive emojis.
- Establish a consistent icon system.
- Improve typography hierarchy.
- Standardize spacing.
- Standardize button hierarchy.
- Standardize card styles.
- Reduce excessive use of bordered panels.
- Improve visual grouping.
- Use whitespace intentionally.
- Simplify dense screens.
- Highlight only information that affects decisions.

### Charts

Charts should answer a question.

Good:

> Is price rising or falling?

> Are arrivals increasing?

> Which mandi gives the best net realization?

Avoid charts that exist only to make a dashboard look advanced.

### Exit criteria

- Screens look consistent.
- Visual hierarchy directs attention to decisions.
- UI feels calm rather than overloaded.

---

# STAGE 21 — DEMO MODE & JUDGE EXPERIENCE
## Priority: P1 for SIH
## Goal: Make the system easy to demonstrate under time pressure.

### Deliverables

Create a controlled demo scenario containing:

- a farmer account
- a realistic crop lot
- sample quality images
- mandi data
- arrival data
- buyer demand
- verified buyers
- logistics option
- storage option
- one or more offers
- transaction history
- dispute example
- FPO aggregation example

### Demo journey

Build one "golden path" that takes the judge through:

1. Farmer opens dashboard
2. Sees current crop opportunity
3. Uploads crop images
4. Sees quality assessment
5. Compares mandi prices
6. Sees arrival and demand
7. Gets sale-window recommendation
8. Sees net realization
9. Gets matched with buyer
10. Creates/publishes lot
11. Receives offer
12. Uses pooled transport
13. Sees transaction/payment timeline
14. Opens digital receipt

### Exit criteria

- Core story can be demonstrated without searching through the app.
- Demo data is internally consistent.
- No broken route can derail the demonstration.

---

# STAGE 22 — SIH GAP VALIDATION
## Priority: P1
## Goal: Verify direct alignment with the problem statement.

Create a final compliance matrix.

| SIH Need | AgriLink Feature | Status | Evidence in Demo |
|---|---|---|---|
| Mandi prices | Market Intelligence | ✅ | Price screen |
| Buyer demand | Buyer Marketplace | ✅ | Demand screen |
| Quality requirements | Quality + Buyer criteria | ✅ | Buyer/lot screen |
| Arrival volumes | Arrival Intelligence | ✅ | Market screen |
| Transport options | Smart Logistics | ✅ | Transport screen |
| Storage options | Storage Marketplace | ✅ | Storage screen |
| Localized price trends | Price Trends | ✅ | Market chart |
| Sale-window recommendation | Decision Engine | ✅ | Farmer home |
| Verified buyers | Buyer Verification | ✅ | Buyer profile |
| Lot creation | Lot Workflow | ✅ | Create Lot |
| Quality grading | Quality Assessment | ✅ | Quality screen |
| Digital offers | Offer/Nego system | ✅ | Offers |
| Logistics coordination | Freight Pool | ✅ | Transport |
| Payment tracking | Transaction Timeline | ✅ | Transactions |
| Dispute handling | Grievance System | ✅ | Disputes |
| FPO aggregation | FPO module | ✅ | FPO dashboard |

Do not mark a row complete merely because a button or heading exists. Mark it complete only when the workflow is demonstrable.

---

# STAGE 23 — SECURITY, TRUST & PRODUCTION SAFETY PASS
## Priority: P1
## Goal: Remove anything that can undermine the project during evaluation.

### Deliverables

- No exposed secrets.
- No real-looking private financial data in demo pages.
- No hard-coded sensitive values in public UI.
- Clear distinction between demo and production.
- Role permissions are enforced.
- Admin-only functions cannot be reached by normal users.
- Users cannot edit completed transaction records improperly.
- Important actions have confirmations where necessary.
- Audit history exists for sensitive administrative actions.
- User-submitted content is handled safely.
- Errors do not expose sensitive technical information.

### Exit criteria

- A basic security review cannot find obvious demo-breaking issues.
- No accidental exposure of sensitive information.

---

# STAGE 24 — FINAL USER TESTING
## Priority: P1
## Goal: Validate that the product actually works for its intended users.

### Test with representative task scenarios

## Farmer

- Register/login
- Select language
- Add crop
- Upload photos
- Understand quality
- Compare markets
- Understand recommendation
- Compare buyers
- Create lot
- Accept offer
- Track logistics
- View payment
- Raise dispute

## Buyer

- Review demand
- Find suitable lot
- Inspect quality
- Make offer
- Track purchase

## FPO

- View members
- Aggregate lots
- Fulfill demand
- Arrange logistics

## Admin

- Verify users
- Moderate lot
- Handle dispute
- Review transaction

### Measure

Record where users:

- hesitate
- misunderstand
- need help
- abandon
- make errors

Fix the highest-friction issues before adding more polish.

---

# STAGE 25 — FINAL SIH PRESENTATION READINESS
## Priority: P0 before judging
## Goal: Make the product and story reinforce each other.

### The presentation should show

## Problem

Farmers often face fragmented information about:

- market price
- demand
- quality
- logistics
- storage
- transaction reliability

## Existing pain

Finding the best selling decision requires multiple disconnected sources and manual decisions.

## AgriLink solution

One decision and transaction layer connecting:

**Market + Quality + Demand + Logistics + Storage + Buyer + Transaction**

## Key differentiator

> **AgriLink does not merely show prices. It converts market information into an actionable selling decision and then helps execute that decision.**

### Demo ending

End with measurable output:

> Before AgriLink  
> Farmer sees fragmented information.

> With AgriLink  
> Farmer sees:
> - best market
> - best buyer
> - expected net realization
> - recommended selling window
> - transport option
> - storage option
> - transaction trail

---

# MASTER PRIORITY ORDER

## P0 — Fix before anything else

1. Mobile responsiveness and mobile workflow
2. Remove unfinished UI and placeholders
3. Remove/label demo financial/payment data
4. Separate Farmer / Buyer / FPO / Admin experiences
5. Make the complete farmer journey work end-to-end
6. Fix broken navigation, controls, forms, and states
7. Prepare a reliable SIH demo path

## P1 — Close the SIH gaps

8. Storage marketplace
9. FPO aggregation
10. Arrival-volume intelligence
11. Price-trend intelligence
12. Sale-window recommendation
13. Buyer marketplace depth
14. Buyer verification/trust
15. Explainable opportunity score
16. Logistics pooling workflow
17. Quality/AI credibility
18. Transaction/payment lifecycle
19. Dispute workflow
20. Alerts/action queue
21. Data source/timestamp/explanation layer

## P2 — Make it excellent

22. Language consistency
23. Accessibility
24. Voice assistance
25. Visual redesign/polish
26. Performance/reliability
27. Better empty/loading/error states
28. Better charts
29. Stronger onboarding
30. Better help/support content

## P3 — Final validation

31. Farmer usability testing
32. Buyer usability testing
33. FPO usability testing
34. Admin usability testing
35. Security pass
36. SIH compliance matrix
37. Golden demo scenario
38. Pitch/demo rehearsal
39. Final bug sweep
40. Final visual consistency sweep

---

# DO NOT DO THESE THINGS

## 1. Do not add features just to make the feature list longer.

Breadth is already one of AgriLink's strengths.

## 2. Do not call something "AI-powered" unless the AI meaningfully contributes.

AI should explain, classify, recommend, or assist—not merely decorate the screen.

## 3. Do not show unsupported precision as fact.

Numbers such as shelf-life, score, probability, prediction, or savings should have an understandable basis.

## 4. Do not present mock financial infrastructure as real.

Simulation is acceptable for a prototype. Misrepresentation is not.

## 5. Do not make the farmer dashboard a technical control center.

Complexity belongs behind progressive disclosure.

## 6. Do not optimize the desktop version while mobile remains broken.

For this use case, mobile is a primary product surface.

## 7. Do not rely on judges reading your documentation.

The product itself must make the value obvious.

---

# DEFINITION OF "BEST VERSION"

AgriLink is ready when all of the following are true:

- A farmer can complete the core journey on a phone.
- The UI is simple enough to understand without training.
- Mandi price and arrival information is visible and credible.
- Buyer demand is visible.
- Buyers are meaningfully verified.
- Storage is a real feature.
- FPO aggregation is a real feature.
- Logistics pooling is operationally understandable.
- Quality assessment is useful and honestly presented.
- Sale-window recommendations are explainable.
- Net realization is central to the decision.
- Offers and negotiation are transparent.
- Payment tracking is believable.
- Disputes have a complete evidence-based workflow.
- Every important number has a source or explanation.
- Every SIH requirement can be demonstrated in one coherent journey.
- The product looks like one integrated system, not a collection of feature pages.

---

# FINAL PRODUCT ARCHITECTURE

The final experience should mentally read as:

**DISCOVER**
→ Market prices + arrivals + demand

**UNDERSTAND**
→ Quality + buyer requirements + trends

**DECIDE**
→ Best market + best buyer + sell/hold window + net realization

**SELL**
→ Lot + verified buyer + offer + negotiation

**MOVE**
→ Transport + pooling + storage

**COMPLETE**
→ Delivery + payment + receipt

**PROTECT**
→ Evidence + dispute + support

**AGGREGATE**
→ FPO lots + demand fulfillment + pooled logistics

That is the AgriLink product story.

---

# One-Sentence Strategic Direction

> **Stop making AgriLink bigger; make it deeper, more credible, more mobile-first, and more tightly connected from market discovery to completed farmer sale.**
