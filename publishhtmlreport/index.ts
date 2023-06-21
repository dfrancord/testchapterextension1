import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputString: string | undefined = tl.getInput('htmlType', false);
        if (inputString == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was givens');
            return;
        }
        
        if (inputString == 'genericHTML') {
            const newhtmlPath: string | undefined = tl.getInput('htmlPath', false);
            console.log('##vso[task.addattachment type=replacedhtml;name=content;]' + newhtmlPath!);
        }
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();