module.exports = {
    root: true,
    parserOptions:{
        ecmaVersion:6,
        sourceType: "module",
        "ecmaFeatures": {
            "jsx": true,
            
          }
        
    },
    "plugins":["react"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    env: {
        browser: true
      },
    "rules":{
        "no-console":0,
        "semi":["error","never"],
        "quotes": ["error", "double"],
        
    }
    
}