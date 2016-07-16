const fakeJson =
    `{
    "version": "0.1.0",
    "command": "\${workspaceRoot}/packages/FAKE/tools/Fake.exe",
    "isShellCommand": false,
    "args": ["./build.fsx"],
    "showOutput": "always",
    "echoCommand": true,
    "tasks": [
        {
            "taskName": "Build",
            "suppressTaskName": true,
            "isBuildCommand": true,
            "args": [ "target=Build" ]
        },
        {
            "taskName": "Test",
            "suppressTaskName": true,
            "isTestCommand": true,
            "args": [ "target=Test" ]
        }
    ]
}`

// TODO: Add support for Python unittest command
const pythonJson =
    `{
    "version": "0.1.0",
    "command": "python",
    "isShellCommand": true,
    "showOutput": "always",
    "echoCommand": true,
    "tasks": [
        {
            "taskName": "Build",
            "suppressTaskName": true,
            "isBuildCommand": true,
            "args": [ "\${file}" ]
        }
    ]
}`

const pythonVirtualenvJson =
    `{
    "version": "0.1.0",
    "command": "\${workspaceRoot}/env/Scripts/python.exe",
    "isShellCommand": false,
    "showOutput": "always",
    "echoCommand": true,
    "tasks": [
        {
            "taskName": "Build",
            "suppressTaskName": true,
            "isBuildCommand": true,
            "args": [ "\${file}" ]
        }
    ]
}`

export default {
    "FAKE"                : fakeJson,
    "Python"              : pythonJson,
    "Python (virtualenv)" : pythonVirtualenvJson
}