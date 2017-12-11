import React from 'react';
import { Footer, FooterTab, Button, Text, Right, Icon } from 'native-base';

const FooterBottom = () => {

    return (
<Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button >
              <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>All</Text>
            </Button>
            <Button>
              <Text style={{  fontWeight: 'bold', color: 'black'}}>Mentions</Text>
            </Button>
            
          </FooterTab>
          <Right>
              <Icon style={{ marginRight: 10, color: 'black' }} name='settings'></Icon>
          </Right>
        </Footer>
    );
};

export { FooterBottom };