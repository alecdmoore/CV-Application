import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/index.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      basic: {
        name: "",
        email: "",
        phone: "",
        finish: false,
      },
      // A section to add your educational experience (school name, title of study, date of study)
      education: {
        school: "",
        major: "",
        dateGrad: "",
        finish: false,
      },
      // section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
      experience: {
        company: "",
        position: "",
        task: "",
        from: "",
        until: "",
        finish: false,
      },
    };
  }

  onSubmitBasicInfo = (e) => {
    e.preventDefault();
    let result = { ...this.state.basic };
    result.finish = true;
    this.setState({
      basic: {
        ...result,
      },
    });
  };

  editBasic = (e) => {
    e.preventDefault();
    let result = { ...this.state.basic };
    result.finish = false;
    this.setState({
      basic: {
        ...result,
      },
    });
  };

  handleChangeBasic = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    e.target.id === "name"
      ? this.setState({
          basic: {
            name: e.target.value,
            email: this.state.basic.email,
            phone: this.state.basic.phone,
            finish: false,
          },
        })
      : e.target.id == "email"
      ? this.setState({
          basic: {
            name: this.state.basic.name,
            email: e.target.value,
            phone: this.state.basic.phone,
            finish: false,
          },
        })
      : e.target.id == "phone"
      ? this.setState({
          basic: {
            name: this.state.basic.name,
            email: this.state.basic.email,
            phone: e.target.value,
            finish: false,
          },
        })
      : null;
  };

  // experience: {
  //   company: "",
  //   position: "",
  //   task: "",
  //   from: "",
  //   until: "",
  //   finish: false,
  // },

  onSubmitEduInfo = (e) => {
    e.preventDefault();
    let result = { ...this.state.education };
    result.finish = true;
    this.setState({ education: { ...result } });
  };
  editEdu = (e) => {
    e.preventDefault();
    let result = { ...this.state.education };
    result.finish = false;
    this.setState({ education: { ...result } });
  };

  handleChangeEdu = (e) => {
    e.preventDefault();
    let result = { ...this.state.education };
    console.log(result);
    // eslint-disable-next-line no-unused-expressions
    e.target.id === "school"
      ? (result.school = e.target.value)
      : e.target.id === "major"
      ? (result.major = e.target.value)
      : e.target.id === "dateGrad"
      ? (result.dateGrad = e.target.value)
      : null;

    this.setState({ education: { ...result } });
  };

  handleChangeExp = (e) => {
    e.preventDefault();
    let result = { ...this.state.experience };
    // eslint-disable-next-line no-unused-expressions
    e.target.id === "company"
      ? (result.company = e.target.value)
      : e.target.id === "position"
      ? (result.position = e.target.value)
      : e.target.id === "task"
      ? (result.task = e.target.value)
      : e.target.id === "from"
      ? (result.from = e.target.value)
      : e.target.id === "until"
      ? (result.until = e.target.value)
      : null;

    this.setState({ experience: { ...result } });
  };

  onSubmitExpInfo = (e) => {
    e.preventDefault();
    let result = { ...this.state.experience };
    result.finish = true;
    this.setState({ experience: { ...result } });
  };

  editExp = (e) => {
    e.preventDefault();
    let result = { ...this.state.experience };
    result.finish = false;
    this.setState({ experience: { ...result } });
  };

  render() {
    const { basic, education, experience } = this.state;
    return (
      <div>
        {!basic.finish && (
          <form
            onSubmit={this.onSubmitBasicInfo}
            onChange={this.handleChangeBasic}
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name"></input>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"></input>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone"></input>
            <button type="submit">Add</button>
          </form>
        )}
        <BasicInfo basic={basic} />
        {basic.finish && <button onClick={this.editBasic}>Edit</button>}
        {!education.finish && (
          <form onSubmit={this.onSubmitEduInfo} onChange={this.handleChangeEdu}>
            <label htmlFor="school">School</label>
            <input type="text" id="school"></input>
            <label htmlFor="major">Major</label>
            <input type="text" id="major"></input>
            <label htmlFor="dateGrad">Graduation Date</label>
            <input type="text" id="dateGrad"></input>
            <button type="submit">Add</button>
          </form>
        )}
        <Education education={education} />
        {education.finish && <button onClick={this.editEdu}>Edit</button>}
        {!experience.finish && (
          <form onSubmit={this.onSubmitExpInfo} onChange={this.handleChangeExp}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company"></input>
            <label htmlFor="position">Position</label>
            <input type="text" id="position"></input>
            <label htmlFor="task">Tasks</label>
            <input type="text" id="task"></input>
            <label htmlFor="from">From</label>
            <input type="text" id="from"></input>
            <label htmlFor="until">Until</label>
            <input type="text" id="until"></input>
            <button type="submit">Add</button>
          </form>
        )}
        <Experience experience={experience} />
        {experience.finish && <button onClick={this.editExp}>Edit</button>}
      </div>
    );
  }
}
