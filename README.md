## Tech in use
- React
- Boostrap

## Tasks
- [ ] fix typeService structure
- [ ] connect to server
- [ ] create admin user
- [ ] apply auth

## Directory Structure
```
.
├── .gitignore
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── atoms
    │   ├── form.jsx
    │   ├── input.jsx
    │   ├── pagination.jsx
    │   ├── select.jsx
    │   └── table.jsx
    ├── components
    │   ├── listCount.jsx
    │   ├── navbar.jsx
    │   └── walletTable.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── screens
    │   ├── loginForm.jsx
    │   ├── signupForm.jsx
    │   ├── transactionForm.jsx
    │   └── wallet.jsx
    ├── services
    │   ├── fakeTransactionService.js
    │   ├── fakeTypeService.js
    │   └── fakeUserService.js
    ├── setupTests.js
    └── utils
        └── paginate.js
