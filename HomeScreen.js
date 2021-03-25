import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ShadowPropTypesIOS
} from 'react-native';

import dictionary from '../Dictionary-App';

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            wordSearched: " ",
            wordReturnedFromDatabase: " ",
            lexicalCategory: " ",
            definition: " ",
            isSearchPressed: " "
        }
    }
    getWord = (text) => {
       var text = text.toLowerCase();
       try {
            var word = dictionary[text] ["word"]
            var lexicalCategory = dictionary[text] ["lexicalCategory"]
            var definition = dictionary[text] ["definition"] 

            this.setState({
                "word": word,
                "lexicalCategory": lexicalCategory,
                "definition": definition,
            });
       }

       catch(err) {
           alert("Sorry This word is not availailable for now");
           this.setState({
               'text': ' ',
               'isSearchPressed': false,
           });
       }

    }
        
    render(){
        return(
            <View> 
                <TextInput 
                    style = {styles.container}
                    onChangeText = {text => {
                        this.setState({
                            text: text,
                            isSearchPressed: false,
                            word: "loading.....",
                            lexicalCategory: " ",
                            expamles: [],
                            defination: " "
                        });
                    }}
                    value = {this.state.text}
                />

                <View> 
                    <TouchableOpacity 
                        style = {styles.searchButton}
                        onPress = {() => {
                            this.setState({ isSearchPressed: true});
                            this.getWord;{this.state.text}
                        }}> 
                    </TouchableOpacity>
                </View>

                <View style = {styles.detailsContainer}>
                    <Text style = {styles.detailsTitle}>
                        Word: {" "}
                    </Text>
                    <Text style = {{fontSize: 18}}>
                        {this.state.word}
                    </Text>
                </View>

                <View style = {styles.detailsContainer}>
                    <Text style = {styles.detailsTitle}>
                        Type = {" "}
                    </Text>
                    <Text style = {{fontSize: 18}}>
                        {this.state.lexicalCategory}
                    </Text>
                </View>

                <View style = {{flexDirection: 'row',flexWrap: 'wrap'}}>
                    <Text style = {styles.detailsTitle}>
                        Definition: {" "}
                    </Text>
                    <Text style = {{fontSize: 18}}>
                        {this.state.definition}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchButton: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer:{
        
    },
    detailsTitle: {

    }
});

export default HomeScreen;