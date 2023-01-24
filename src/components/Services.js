import React, { Component } from 'react'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adip"
            },
            {
                icon: <FaHiking/>,
                title: "Free HikiFaHikings",
                info: "Lorem ipsum dolor sit amet, consectetur adip"
            },
            {
                icon: <FaBeer/>,
                title: "Free BeerFaBeers",
                info: "Lorem ipsum dolor sit amet, consectetur adip"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free ShuFaShuttleVans",
                info: "Lorem ipsum dolor sit amet, consectetur adip"
            }
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title="Services"/>
        <div className="services-center">
            {this.state.services.map((item,index)=> {
                return (
                    <article className="service" key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
      </section>
    )
  }
}
