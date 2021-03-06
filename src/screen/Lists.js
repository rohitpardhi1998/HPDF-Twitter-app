import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,Body,Title,Left,Button,Right,Icon, Text } from 'native-base';

// just a dummy page showing list
export default class Lists extends Component {
    static navigationOptions = {
        title: 'Lists',
        headerStyle:{ backgroundColor: '#FFF'},
        headerTitleStyle:{ color: 'blue'},
        }
  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
             <Icon name="arrow-back" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Title  style={{color:'black'}}>Lists</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>list 1</Text>
            </ListItem>
            <ListItem>
              <Text>list 2</Text>
            </ListItem>
            <ListItem>
              <Text>list 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}