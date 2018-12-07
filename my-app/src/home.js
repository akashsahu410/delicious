import React from 'react'
import Footer from './components/footer'
import Event from './components/event'
import About from './components/about'
import Banner from './components/banner';
import Menu from './components/menu';
import Book_Table from './components/book_table';
class Home extends React.Component{
    state={

    }
  render() {
    return (
      <div>
        <Banner/>
        <About/>      
        <Event/>
        <Menu/>
        <Book_Table/>
       <Footer/>
      
      </div>
    )
  }
}
export default Home