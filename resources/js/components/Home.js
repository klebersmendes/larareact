import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from './Products/Products'
import { ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql } from "@apollo/client";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: {},
            client: {}
        }
    }

    componentDidMount() {
        const rootElement = document.getElementById("root");

        const client = new ApolloClient({
            uri: "http://0.0.0.0/graphql?query=query+FetchUsers{users{id,email,password}}",
            cache: new InMemoryCache()
          });

        client
        .query({
            query: gql`
            query FetchUsers {
                users {
                    id
                    email
                }
            }
            `
        })
        .then(result => console.log(result));

        // document.body.style.backgroundColor = "#FFF5FA"
        const products = {
            0: {
                id: 1515,
                name: 'Produto 1',
                price: 10.5,
                image: 'imagem 1'
            },
            1: {
                id: 5541,
                name: 'Produto 2',
                price: 15.01,
                image: 'imagem 2'
            }
        };
        this.setState({
            products: products
        });
    }

    render(){
        return (
            // <div>
            //     <Products onClick={this.handlerClick} products={this.state.products} />
            // </div>
            // <ApolloProvider client={client}>
            //     <App />
            // </ApolloProvider>
            // rootElement
        );
    }
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
