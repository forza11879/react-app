var vscode = require("vscode");

function activate(context) {
  function getWebviewContent() {
    const domain = "https://app.avocode.com";
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <script type="text/javascript">
                const vscode = acquireVsCodeApi()
                window.addEventListener('message', (e) => {
                    if (e.origin === '${domain}') {
                        const code = e.data.code
                        vscode.postMessage({
                          command: 'avocode-snippet',
                          text: code
                      })
                    }
                })
            </script>
        </head>
        <body style="margin: 0; padding: 0; height: 100%; overflow: hidden;">
            <iframe src="${domain}/?utm_source=vscode&utm_medium=integration&utm_campaign=avocode-embeded-in-vscode" id="frame" width="100%" height="100%" frameborder="0" style="position:absolute; left: 0; right: 0; bottom: 0; top: 0px;"/>
        </body>
    </html>
    `;
  }

  let lastSnippet = null;
  function provideCompletionItems(snippet) {
    const code = snippet ? snippet.split("\n").map(line => line.trim()) : [];
    if (lastSnippet) {
      lastSnippet.dispose();
    }
    lastSnippet = vscode.languages.registerCompletionItemProvider(
      [{ pattern: "**" }],
      {
        provideCompletionItems() {
          return code.map(item => new vscode.CompletionItem(item));
        }
      }
    );
  }

  let currentPanel = null;
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.avocode", () => {
      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.Two);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          "avocode",
          "Avocode",
          vscode.ViewColumn.Two,
          {
            enableScripts: true,
            retainContextWhenHidden: true
          }
        );
        currentPanel.webview.html = getWebviewContent();

        currentPanel.webview.onDidReceiveMessage(
          message => {
            if (message.command === "avocode-snippet") {
              provideCompletionItems(message.text);
            }
          },
          undefined,
          context.subscriptions
        );

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          undefined,
          context.subscriptions
        );
      }
    })
  );
}

function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;
