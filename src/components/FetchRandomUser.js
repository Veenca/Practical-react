import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    persons: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ persons: data.results, loading: false });
    console.log(data.results);
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.persons) {
      return <div>Didn't get any data</div>;
    }
    const peopleJsx=[];
    this.state.persons.forEach(persons=>{
        peopleJsx.push(
            <div>
            {this.state.persons.map((persons,i) => (
               
              <div key={persons.login.uuid}>
                 
                {persons.name.title}
                <br />
                {persons.name.first}
                <br />
                {persons.name.last}
                <br />
                <img src={persons.picture.large} alt="immagine" />
              </div>
            ))}
          </div>
        )
    })

    return (
            peopleJsx

        );
  }
}
