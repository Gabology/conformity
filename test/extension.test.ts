//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

const addBuildScriptCmd = "extension.generateBuildTask";

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    test("Extension can be activated by command", (done) => {
        vscode.commands.executeCommand(addBuildScriptCmd).then(
            success => done()
        )
    });

    test("\'Generate Build Task command\' is registered", (done) => {
        let cmds = vscode.commands.getCommands(true)
        cmds.then(ids => {
                let containsCmd = ids.indexOf(addBuildScriptCmd)
                assert.notEqual(containsCmd, -1)
                done()
            })
    });

    test("Choose Build Task quick pick contains entries", (done) => {
        const expected = ['FAKE', 'Python']
        vscode.commands.executeCommand(addBuildScriptCmd).then( qpItems => {
            assert.deepEqual(qpItems, expected)
            done()
        })
    });
});