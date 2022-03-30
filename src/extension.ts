import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // previous editor
  let prev = vscode.commands.registerCommand("openbar.prev", () => {
    vscode.commands.executeCommand("workbench.action.previousEditor");
  });

  // next editor
  let next = vscode.commands.registerCommand("openbar.next", () => {
    vscode.commands.executeCommand("workbench.action.nextEditor");
  });

  // open command palette
  let palette = vscode.commands.registerCommand("openbar.palette", () => {
    vscode.commands.executeCommand("workbench.action.showCommands");
  });

  // format document
  let format = vscode.commands.registerCommand("openbar.format", () => {
    vscode.commands.executeCommand("editor.action.formatDocument");
  });

  // open terminal
  let terminal = vscode.commands.registerCommand("openbar.terminal", () => {
    vscode.commands.executeCommand("workbench.action.togglePanel");
  });

  // add functions to extension
  context.subscriptions.push(prev);
  context.subscriptions.push(next);
  context.subscriptions.push(palette);
  context.subscriptions.push(format);
  context.subscriptions.push(terminal);
}

export function deactivate() {}
