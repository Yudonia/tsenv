# tsenv
## What is this?
typescriptの環境構築セットです．とはいえ，すでに環境構築は終わっていてすぐにでも使い始められるようにしてある（つもりです）．ついででp5でちょっと遊んだ形跡がありますが，まあ気にしないで消してください．
:::note warn
事前に**Node.js**だけはインストールしておいてください．
:::

## installation
Use powershell or terminal and ```git clone https://github.com/Yudonia/tsenv```.
## How to use?
This environment operate as following;
source scripts(```.ts``` in ```trc``` dir) >> transed script(```.js``` in '''src''' dir) >> bundled script(```.js``` in ```dist``` dir).<br>

1.\ Open terminal and move to where you cloned this.
2.\ Do ```npx tsc -w```.
3.\ Repeat 1.
4.\ Do ```npx webpack -w```.

