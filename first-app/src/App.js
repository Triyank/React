import React from 'react';
import './App.css';
import CreateTable from './components/table.js'
import CreateHeader from './components/Header'


function App(){
  
  return (
    <>
      <CreateHeader/>
      <CreateTable name="Triyank" department="Development" level="Trainee"/>
      <CreateTable name="Shivam" department="Development" level="Trainee"/>
      <CreateTable name="Reema" department="Testing" level="Trainee"/>
      <CreateTable name="Deepika" department="HR" level="Senior HR"/>
      <CreateTable name="Sonu" department="IT" level="Experiece"/>
      <CreateTable name="Shivani" department="Development" level="Trainee"/>
    </>
  );
}
export default App;
