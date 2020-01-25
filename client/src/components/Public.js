import React, {Component} from 'react';
import Courses from './Courses';

export default class Public extends Component {

    state = {
        courses: null
    }; 

    async componentDidMount(){
        
        const { context } = this.props;

        // Getting courses data from the api
        let course = await context.data.getCourses();

        // using the courses data from api and using it to create each course component
        let allCourses = course.map( course => {
            return <Courses key={course.id} title={course.title} id={course.id} />;
        })

        // setting the course state to the component courses
        this.setState({
            courses: allCourses
        });

        console.log(this.state.courses);
    }

    render(){

        const {courses} = this.state;
        
             
        return(
            <div className="bounds">

                {/* Generating all the courses */}
                {courses}

                <div className="grid-33">
                    <a className="course--module course--add--module" href="create-course.html">
                        <h3 className="course--add--title"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" className="add">
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>New Course</h3>
                    </a>
                </div>
            </div>
        )
    }
}