# conformity README

This is a very simple addon for generating a template `tasks.json` configuration file for Visual Studio Code.

## Usage

Simply invoke the _Generate Build Task_ command from the editor and then pick an approriate build task template from the list.

## Known Issues

As of right now the templates will make some assumptions regarding your configuration.
For example the FAKE template will assume that you have downloaded FAKE using NuGet or paket so that it exists in a specific path.

In the future I am planning on adding limited support for dynamic template generation.

## Contributions

As of right now conformity only supports three different templates. Adding new templates is very easy however and I would be happy to accept pull requests from users who wish to contribute.
