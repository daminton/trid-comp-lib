## INSTALL

npm i 'trid-comp-lib'
yarn add 'trid-comp-lib'

## USAGE

Custom React component library with storybookJS for documentation

## BUTTON EXAMPLE

      import React from 'react'
      import { Button } from 'trid-comp-lib';
      import '../node_modules/trid-comp-lib/src/components/button/Button.css';
      const Button = () => {
        return(
          <Button
            buttonName="primary"
            buttonSize="btn--medium"
            buttonStyle="btn--primary"
            onClick={() => {}}
          />
        );
      };
