/**
 * Created by oscar on 7/25/17.
 */

import React, {Component} from 'react';
import $ from 'jquery';
import uid from 'uid';
import api from '../../proxy/api';

export default class AddRemoveFromCategorie extends Component{

    constructor(props){
        super(props);
        this.state = {
            categoriesList: []
        };
        this.getCatList = this.getCatList.bind(this);
    }

    getCatList(data){
        this.setState(
            {
                categoriesList: data
            }
            ,this.initializeSelect);
    }

    initializeSelect(){
        $('select').material_select();
    }
    componentDidMount(){
        api.call.getCategories(this.getCatList);
    }

    handleClick(){

    }

    handleChange(){}
    
    render(){
        
        return(
            <div>
            <div className="input-field col s8">
                <select multiple value={[]} onChange={(e)=>this.handleChange}>
                    <option  disabled >Categorias</option>
                    {this.state.categoriesList.map((entry)=> <option key={uid()} id={entry.id} value={entry.categorie}>{entry.categorie}</option>)}
                </select>
            </div>
                <a className="waves-effect waves-light btn" onClick={(e)=>this.handleClick}>Añadir a categorias</a>
            </div>
        );
    }
    
}