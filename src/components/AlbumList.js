import React,{Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
// class based component
// don't need ; at the end because it is a class
// componentWillMount 
// console.log('componentWillMount running');
// step 1. set default state 2. load item 3. set state 
// we can only set state this way
class AlbumList extends Component {
    state = {albums: []};
UNSAFE_componentWillMount (){
    
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
    
    
}
// prop is album.album
renderAlbums(){
    return this.state.albums.map(album => 
    <AlbumDetail key ={album.title} album={album}/>
    );
}


    render(){
      


        return (
            <ScrollView>
               {this.renderAlbums()}
             </ScrollView>

        );
    }
}

export default AlbumList;