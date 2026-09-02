import fs from 'fs';
import { execSync } from 'child_process';

const gitPath = 'C:\\Users\\SHASHANK\\AppData\\Local\\Programs\\MinGit\\cmd\\git.exe';

function run(cmd) {
    console.log(`> ${cmd}`);
    try {
        const out = execSync(`"${gitPath}" ${cmd}`, { encoding: 'utf-8' });
        console.log(out);
        return out;
    } catch (e) {
        console.error('Error running:', cmd);
        if (e.stdout) console.log('STDOUT:', e.stdout);
        if (e.stderr) console.error('STDERR:', e.stderr);
        throw e;
    }
}

try {
    // Clean up temporary helper if present
    if (fs.existsSync('scripts/git_helper.js')) {
        fs.unlinkSync('scripts/git_helper.js');
    }

    run('add .');
    run('status --short');
    run('commit -m "Fix Netlify deployment, Gemini multimodal quality verification, camera workflow, and admin rejection messaging"');
    run('push origin main');

    console.log('\n🎉 Successfully pushed corrected code to GitHub repository (origin/main)!');
} catch (err) {
    console.error('Git execution failed:', err.message);
} finally {
    if (fs.existsSync('scripts/git_push.js')) {
        fs.unlinkSync('scripts/git_push.js');
    }
}
