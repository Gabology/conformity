'use strict';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import buildTasks from './buildTasks';


const vscodeDir = '.vscode'
const taskPath = 'tasks.json'

function isDirSync(aPath) {
    try {
        return fs.statSync(aPath).isDirectory();
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
        else {
            throw e;
        }
    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.generateBuildTask', () => {
        vscode.window.showQuickPick(Object.keys(buildTasks)).then(choosenTask => {
            let json: string = buildTasks[choosenTask]

            if (!vscode.workspace.rootPath) {
                vscode.window.showErrorMessage("No workspace available, cannot create tasks file.")
            }
            else {
                let vscodePath = path.join(vscode.workspace.rootPath, vscodeDir)

                if(!isDirSync(vscodePath)) {
                    fs.mkdirSync(vscodePath)
                }

                let fullPath = path.join(vscodePath, taskPath)
                fs.writeFileSync(fullPath, json, 'utf8')
            }
        });

        return buildTasks;
    });

    context.subscriptions.push(disposable);
}