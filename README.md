# Test automation for the SW test discipline

This software testing project is a partial requirement for a grade in the quality and software test discipline at the State University of Rio Grande do Sul - UERGS. Was set up in late 2019 under the supervision of Professor Margrit R. Krug, Ph.D.

As they say:
> May the force be with you!

## Description

For this project a simple calculator was developed to test the application with the chromeless test automator. Nowadays, chromeless has been discontinued. 
We use chromeless for Local development purpose, but you can also run in a remote setup.

## Development

- [x] Calculator

- [x] Chromeless installation

- [x] Test Script

- [x] Automated Test


## Test Automation

We'll test it:

- printscreen
    > .screenshots() 
- existence of buttons (returns true or false)
    > .exists(#iDbutton)
- click of buttons
    > .click(#iDbutton)
- result stats
    > .wait(#resultstats)

All this are Chrome methods. With chromeless we can control Chrome. This is usefull for integration tests.    


## Requirements

- [Node.js](https://nodejs.org/en/)
- [Chromeless](https://github.com/prisma-archive/chromeless)

## Running the Project (Locally)

1. Clone this Repository
    ```
    git clone https://github.com/almeraojr/test-automation.git
    ```
2. Head to your project directory, open a command prompt
    - type at the prompt
    ```
    npm install chromeless
    ```
3.  After the install, run the script  
    - type at the prompt
    ```
    node calculator_test.js
    ``` 

## Contributors

##### Newton Júnior [`newton-almerao@uergs.edu.br`]
##### Débora Garcia [`debora-garcia@uergs.edu.br`]
##### Ismael Vianna [`ismael-vianna@uergs.edu.br`]
##### Margrit Krug  [`margrit-krug@uergs.edu.br`]

## Original chromeless repository (archived)

[Chromeless](https://github.com/prisma-archive/chromeless)
