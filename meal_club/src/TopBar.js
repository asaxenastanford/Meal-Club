// import React from 'react';
// import {
//   AppBar, Toolbar, Typography
// } from '@material-ui/core';
// import './TopBar.css';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import axios from 'axios';
// import DialogueForm from './DialogueForm.jsx'

// /**
//  * Define TopBar, a React componment of CS142 project #5
//  */
// class TopBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={name:"Aakanksha Saxena",visibleUsers:[]};
//     this.logout = this.logout.bind(this);
//     this.handleUploadButtonClicked = this.handleUploadButtonClicked.bind(this);
//     this.setVisibleUsers = this.setVisibleUsers.bind(this);
//     this.uploadInput = null;
//   }

//   setVisibleUsers(listUsers){
//     this.setState({visibleUsers:listUsers},()=>{
//       //console.log("Users who can see: ",this.state.visibleUsers);
//     });
//   }

//   //this function is called when user presses the update button
//   handleUploadButtonClicked = (e) => {
//      e.preventDefault();
//      if (this.uploadInput.files.length > 0) {

//       // Create a DOM form and add the file to it under the name uploadedphoto
//       const domForm = new FormData();
//       domForm.append('uploadedphoto', this.uploadInput.files[0]);
//       axios.post('/photos/new', domForm)
//         .then((res) => {
//           let photoId = res.data._id;
//           let parameters = {viewers:this.state.visibleUsers};

//           // add in visibility permissions 
//           let visibleAddress = '/viewers/' + photoId;
//           axios.post(visibleAddress,parameters).then(() => {
//             this.setState({visibleUsers:[]});
//             this.props.handleUpload();
//           }, function (err) {
//             console.log(err.statusText);
//           });
//         })
//         .catch(err => console.log(`POST ERR: ${err}`));
//       /*axios.post('/photos/new', domForm)
//         .then((res) => {
//           console.log(res);
//         })
//         .catch(err => console.log(`POST ERR: ${err}`));*/
//     }
//   }

//   logout(){
//     console.log('logout');
//     let address = 'admin/logout';

//     axios.post(address).then(() => {
//       this.props.handleBarChange("Please Login");
//       this.props.handleInfoChange();
//     }, function (err) {
//       console.log(err.statusText);
//     });
//   }


//   render() {
//     let loggedIn = this.props.test !== "Please Login";
//     return (
//       <AppBar className="cs142-topbar-appBar" position="absolute">
//         <Toolbar className="cs142-topbar-appBar">
//           <Typography variant="h5" color="inherit" className="textFormat">{this.state.name}</Typography>
//           <Typography variant="h5" color="inherit">{this.props.test}</Typography>
//           {
//             loggedIn ? <Box pl={3}><input type="file" accept="image/*" ref={(domFileRef) => { this.uploadInput = domFileRef; }} /></Box> :  <Typography></Typography>
//           }
//           {
//             loggedIn ? <Box color='inherit' pl={3}><DialogueForm signedInUserID={this.props.signedInID} handleVisibleUsers={this.setVisibleUsers}/></Box> :  <Typography></Typography>
//           }
//           {
//             loggedIn ? <Box pl={3}><Button color='inherit' onClick={this.handleUploadButtonClicked}> Submit </Button></Box> :  <Typography></Typography>
//           }
//           {
//             loggedIn ? <Box pl={3}><Button color='inherit' onClick={this.logout}> Log Out </Button></Box> :  <Typography></Typography>
//           }
//         </Toolbar>
//       </AppBar>
//     );
//   }
// }

// export default TopBar;