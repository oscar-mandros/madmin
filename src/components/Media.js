/**
 * Created by oscar on 7/17/17.
 */
import React, {Component} from 'react';
import UploadFiles from './UploadFiles';
import AddRemoveFromCategories from './AddRemoveFromCategorie';
import FileListTable from './FileListTable';

export default class Media extends Component{



    render(){

        return(
            <div className="">
                <div className="center"><h3>Media</h3></div>
                <UploadFiles/>
                <div>
                    <AddRemoveFromCategories/>
                </div>
                <div className="col s12">
                    <FileListTable titleTable="Archivo"/>
                    <a className="waves-effect waves-light btn">Eliminar</a>
                </div>


            </div>
        );
    }

}
