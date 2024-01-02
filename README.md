# NF-WINTER_HOMEWORK

> 這是中央大學新生之訊網程設組的寒假作業範例，如果想使用全部功能，請跟著此檔案最後的 **vscode配置** 配置你的vscode

## vscode配置

### ESLINT & Prettier & Tailwind

1. 到延伸模組下載 [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) & [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) & [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
2. 在專案目錄下新增 .vscode/settings.json，並修改內容如下
    ```
    // 如果本來就有其他內容，請不要刪掉，以新增為原則
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }
    ```

3. 在vscode中按下 **ctrl+,** 打開設定，搜尋 format on save 後勾選此設定
  ![format on save](./assets/image.png)

4. 關掉重開你的 Vscode，並確定你執行過 ```npm install```。之後當你按下 **ctrl+s** 儲存時，就會對你的檔案進行自動排版了
