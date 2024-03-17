import React, { useState, useRef, useEffect } from "react";
import "./UserProfile.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteIcon from "@mui/icons-material/Delete";
import backgroundImageFile from "./backgroundImage.jpg";
import profileImageFile from "./userProfileImage.JPG";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const [name, setName] = useState("Name");
  const [degree, setDegree] = useState("BT CSE");
  const user = JSON.parse(localStorage.getItem("user"));

  const [editable, setEditable] = useState(user.userId === id);

  // profileImageAndDetail functionalities
  const [profileImage, setProfileImage] = useState(profileImageFile);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageFile);

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

  const handleBackgroundImageChange = (event) => {
    event.preventDefault();

    if (event.target.files.length > 0) {
      Promise.all([convertToBase64(event.target.files[0])]).then(([img]) => {
        setBackgroundImage(img);
      });
    }
  };

  const handleProfileImageChange = (event) => {
    event.preventDefault();

    if (event.target.files.length > 0) {
      Promise.all([convertToBase64(event.target.files[0])]).then(([img]) => {
        setProfileImage(img);
      });
    }
  };

  // Profile Description Functionalities
  const [descriptionProfileDescription, setDescriptionProfileDescription] =
    useState(
      "You should bring together user attitudes and behaviours in relation to a product or service. You can also include demographic information about the individual.You can present your user profiles in a range of different ways using content that is relevant to the project.You should bring together user attitudes and behaviours in relation to a product or service. You can also include demographic information about the individual.You can present your user profiles in a range of different ways using content that is relevant to the project."
    );

  const [isEditingProfileDescription, setIsEditingProfileDescription] =
    useState(false);
  const [
    editedDescriptionProfileDescription,
    setEditedDescriptionProfileDescription,
  ] = useState(descriptionProfileDescription);

  const handleEditClickProfileDescription = () => {
    setIsEditingProfileDescription(true);
    setEditedDescriptionProfileDescription(descriptionProfileDescription);
  };

  const handleSaveClickProfileDescription = () => {
    setDescriptionProfileDescription(editedDescriptionProfileDescription);
    setIsEditingProfileDescription(false);
  };
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditingProfileDescription) {
      // Set focus to the textarea
      textareaRef.current.focus();
      // Move cursor to the end of the text
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
        textareaRef.current.value.length;
    }
  }, [isEditingProfileDescription]);

  // Skills Functionalities
  const [skills, setSkills] = useState([
    "Skill1",
    "Skill2",
    "Skill3",
    "Skill4",
    "Skill5",
    "Skill6",
    "Skill7",
    "Skill8",
    "Skill9",
    "Skill10",
    "Skill11",
    "Skill12",
    "Skill13",
    "Skill14",
    "Skill15",
    "Skill16",
    "Skill17",
    "Skill18",
    "Skill19",
    "Skill20",
    "Skill21",
    "Skill22",
    "Skill23",
    "Skill24",
    "Skill25",
    "Skill26",
    "Skill27",
    "Skill28",
    "Skill29",
    "Skill30",
    "Skill31",
    "Skill32",
    "Skill33",
    "Skill34",
    "Skill35",
    "Skill36",
    "Skill37",
    "Skill38",
    "Skill39",
    "Skill40",
    "Skill41",
    "Skill42",
    "Skill43",
    "Skill44",
    "Skill45",
    "Skill46",
    "Skill47",
    "Skill48",
    "Skill49",
    "Skill50",
  ]);

  const [editingIndexSkills, setEditingIndexSkills] = useState(null);
  const editRefSkills = useRef([]);

  const handleEditSkills = (index) => {
    setEditingIndexSkills(index);
    setTimeout(() => {
      if (editRefSkills.current[index]) {
        const textLength = editRefSkills.current[index].textContent.length;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(editRefSkills.current[index].childNodes[0], textLength);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }, 0);
  };

  const handleSaveSkills = (event, index) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.textContent;
    setSkills(newSkills);
  };

  const handleDeleteSkills = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleMoveUpSkills = (index) => {
    if (index === 0) return; // Already at the top
    const newSkills = [...skills];
    [newSkills[index], newSkills[index - 1]] = [
      newSkills[index - 1],
      newSkills[index],
    ];
    setSkills(newSkills);
  };

  const handleMoveDownSkills = (index) => {
    if (index === skills.length - 1) return; // Already at the bottom
    const newSkills = [...skills];
    [newSkills[index], newSkills[index + 1]] = [
      newSkills[index + 1],
      newSkills[index],
    ];
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills(["New Skill", ...skills]);
    setEditingIndexSkills(0);
    handleEditSkills(0);
  };

  //  Blog Posts Functionalities
  const [blogpostsBlogPosts, setBlogpostsBlogPosts] = useState([
    "hello",
    "Software Dev Seocond",
    "Software Dev",
    "Software Dev",
    "Software Dev",
    "Software Dev Last",
    "Software Dev Last",
    " Software Dev Last",
    "Software",
  ]);

  // achievements functionalites : here we will have to add the functionality to add, delete, edit and move up and down the achievements
  const [achievements, setAchievements] = useState([
    "Achievement1",
    "Achievement2",
    "Achievement3",
    "Achievement4",
    "Achievement5",
    "Achievement6",
    "Achievement7",
    "Achievement8",
    "Achievement9",
    "Achievement10",
  ]);

  const [editingIndexAchievements, setEditingIndexAchievements] =
    useState(null);
  const editRefAchievements = useRef([]);

  const handleEditAchievements = (index) => {
    setEditingIndexAchievements(index);
    setTimeout(() => {
      if (editRefAchievements.current[index]) {
        const textLength =
          editRefAchievements.current[index].textContent.length;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(
          editRefAchievements.current[index].childNodes[0],
          textLength
        );
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }, 0);
  };

  const handleSaveAchievements = (event, index) => {
    const newAchievements = [...achievements];
    newAchievements[index] = event.target.textContent;
    setAchievements(newAchievements);
  };

  const handleDeleteAchievements = (index) => {
    const newAchievements = [...achievements];
    newAchievements.splice(index, 1);
    setAchievements(newAchievements);
  };

  const handleMoveUpAchievements = (index) => {
    if (index === 0) return; // Already at the top
    const newAchievements = [...achievements];
    [newAchievements[index], newAchievements[index - 1]] = [
      newAchievements[index - 1],
      newAchievements[index],
    ];
    setAchievements(newAchievements);
  };

  const handleMoveDownAchievements = (index) => {
    if (index === achievements.length - 1) return; // Already at the bottom
    const newAchievements = [...achievements];
    [newAchievements[index], newAchievements[index + 1]] = [
      newAchievements[index + 1],
      newAchievements[index],
    ];
    setAchievements(newAchievements);
  };

  const handleAddAchievement = () => {
    setAchievements(["New Achievement", ...achievements]);
    setEditingIndexAchievements(0); // Start editing the newly added achievement at index 0
    handleEditAchievements(0);
  };

  // credentials functionalities
  // here we will have to add the functionality to add, delete, edit and move up and down the credentials
  // we will have to add some extra features because we have to add the organization and the time period also
  const [credentials, setCredentials] = useState([
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
    {
      post: "Senior Manager at Google",
      organization: "Google",
      from: "2019",
      to: "Present",
    },
  ]);
  const [showCredentialPopup, setShowCredentialPopup] = useState(false);
  const [newCredential, setNewCredential] = useState({
    post: "",
    organization: "",
    from: "",
    to: "",
  });
  const [editingCredentialIndex, setEditingCredentialIndex] = useState(null);
  const editRefCredentialPosts = useRef([]);
  const editRefCredentialOrganization = useRef(null);
  const editRefCredentialFromTo = useRef(null);

  const handleInputChangeCredential = (e) => {
    const { name, value } = e.target;
    setNewCredential((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAddCredentialSubmit = (e) => {
    e.preventDefault();
    // Add the new credential to the list of credentials
    const updatedCredentials = [
      ...credentials,
      {
        post: newCredential.post,
        organization: newCredential.organization,
        from: newCredential.from,
        to: newCredential.to === "" ? "Present" : newCredential.to,
      },
    ];

    console.log(updatedCredentials);
    setCredentials(updatedCredentials);
    // Close the popup
    setShowCredentialPopup(false);

    setNewCredential({
      post: "",
      organization: "",
      from: "",
      to: "",
    });
    setEditingCredentialIndex(null);
  };
  const handleEditCredential = (index) => {
    setEditingCredentialIndex(index);
    setTimeout(() => {
      if (editRefCredentialPosts.current[index]) {
        const textLength =
          editRefCredentialPosts.current[index].textContent.length;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(
          editRefCredentialPosts.current[index].childNodes[0],
          textLength
        );
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };
  const handleDeleteCredential = (index) => {
    const newCredentials = [...credentials];
    newCredentials.splice(index, 1);
    setCredentials(newCredentials);
  };

  const handleSaveCredential = (event, index) => {
    const par = event.target.parentNode.parentNode.parentNode;
    const sib = par.querySelectorAll("div");
    const siblings = Array.from(sib);
    const fromto = sib[2].querySelectorAll("span");
    const fromtos = Array.from(fromto);

    const newCredential = {
      post: siblings[0].textContent,
      organization: siblings[1].textContent,
      from: fromtos[0].textContent,
      to: fromtos[2].textContent,
    };

    const updatedCredentials = [...credentials];
    updatedCredentials[index] = newCredential;
    console.log(updatedCredentials);
    setCredentials(updatedCredentials);
    setEditingCredentialIndex(null);
  };

  const [projects, setProjects] = useState([
    {
      name: "Project1",
      instructorname: "Instructor1",
      skills: ["Skill1", "Skill2", "Skill3"],
      description: "This is a project description",
      from: "2019",
      to: "Present",
    },
    {
      name: "Project1",
      instructorname: "Instructor1",
      skills: ["Skill1", "Skill2", "Skill3"],
      description: "This is a project description",
      from: "2019",
      to: "Present",
    },
  ]);

  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    instructorname: "",
    skills: "",
    description: "",
    from: "",
    to: "",
  });

  const [editProjectIndex, setEditProjectIndex] = useState(null);
  const editRefProjectNames = useRef([]);
  const editRefProjectInstructor = useRef(null);
  const editRefProjectSkills = useRef(null);
  const editRefProjectDescription = useRef(null);
  // Functions for the project
  const handleInputChangeProject = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };
  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    const updatedProjects = [...projects, newProject];
    console.log(updatedProjects);
    setProjects(updatedProjects);
    setShowProjectPopup(false);
    setNewProject({
      name: "",
      instructorname: "",
      skills: [],
      description: "",
      from: "",
      to: "",
    });
  };
  const handleEditProject = (index) => {
    setEditProjectIndex(index);
    setTimeout(() => {
      if (editRefProjectNames.current[index]) {
        const textLength =
          editRefProjectNames.current[index].textContent.length;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(
          editRefProjectNames.current[index].childNodes[0],
          textLength
        );
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };
  const handleDeleteProject = (index) => {
    let newArray = projects.slice();
    newArray.splice(index, 1);
    setProjects(newArray);
  };
  const handleMoveUpProject = (index) => {
    if (index === 0) return; // Already at the top
    const newProjects = [...projects];
    const temp = newProjects[index];
    newProjects[index] = newProjects[index - 1];
    newProjects[index - 1] = temp;
    setProjects(newProjects);
  };

  const handleMoveDownProject = (index) => {
    if (index === projects.length - 1) return; // Already at the bottom
    const newProjects = [...projects];
    [newProjects[index], newProjects[index + 1]] = [
      newProjects[index + 1],
      newProjects[index],
    ];
    setProjects(newProjects);
  };

  const handleSaveProjets = (event, index) => {
    const par = event.target.parentNode.parentNode.parentNode;
    const sib = par.querySelectorAll("div");
    const siblings = Array.from(sib);
    const fromto = sib[2].querySelectorAll("span");
    const fromtos = Array.from(fromto);

    const newProject = {
      name: siblings[0].textContent,
      instructorname: siblings[1].textContent,
      skills: siblings[3].textContent.split(","),
      description: siblings[4].textContent,
      from: fromtos[0].textContent,
      to: fromtos[2].textContent,
    };

    const updatedProjects = [...projects];
    updatedProjects[index] = newProject;
    console.log(updatedProjects);
    setProjects(updatedProjects);
    setEditProjectIndex(null);
  };

  // Course Functionalities: the functionalities are implemented in same way as the credentials
  const [courses, setCourses] = useState([
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
    {
      coursename: "Course1",
      instructorname: "Instructor1",
      description: "This is a course description",
      year: "2019",
      semester: "Spring",
    },
  ]);

  const [showCoursePopup, setShowCoursePopup] = useState(false);
  const [newCourse, setNewCourse] = useState({
    coursename: "",
    instructorname: "",
    description: "",
    year: "",
    semester: "",
  });
  const [editCourseIndex, setEditCourseIndex] = useState(null);
  const editRefCourseNames = useRef([]);
  const editRefCourseInstructor = useRef(null);
  const editRefCourseDescription = useRef(null);
  const editRefCourseYear = useRef(null);
  const editRefCourseSemester = useRef(null);
  // Functions for the course
  const handleInputChangeCourse = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };
  const handleAddCourseSubmit = (e) => {
    e.preventDefault();
    courses.push(newCourse);
    setCourses([...courses]);
    setShowCoursePopup(false);
    setNewCourse({
      coursename: "",
      instructorname: "",
      description: "",
      year: "",
      semester: "",
    });
  };
  const handleEditCourse = (index) => {
    setEditCourseIndex(index);
    setTimeout(() => {
      if (editRefCourseNames.current[index]) {
        const textLength = editRefCourseNames.current[index].textContent.length;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(
          editRefCourseNames.current[index].childNodes[0],
          textLength
        );
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  };
  const handleDeleteCourse = (index) => {
    let newArray = courses.slice();
    newArray.splice(index, 1);
    setCourses(newArray);
  };
  const handleMoveUpCourse = (index) => {
    if (index === 0) return; // Already at the top
    const newCourses = [...courses];
    [newCourses[index], newCourses[index - 1]] = [
      newCourses[index - 1],
      newCourses[index],
    ];
    setCourses(newCourses);
  };
  const handleMoveDownCourse = (index) => {
    if (index === courses.length - 1) return; // Already at the bottom
    const newCourses = [...courses];
    [newCourses[index], newCourses[index + 1]] = [
      newCourses[index + 1],
      newCourses[index],
    ];
    setCourses(newCourses);
  };
  const handleSaveCourse = (event, index) => {
    const par = event.target.parentNode.parentNode.parentNode;
    const sib = par.querySelectorAll("div");
    const siblings = Array.from(sib);

    const newCourse = {
      coursename: siblings[0].textContent,
      instructorname: siblings[1].textContent,
      description: siblings[2].textContent,
      year: siblings[3].textContent,
      semester: siblings[4].textContent,
    };

    const updatedCourses = [...courses];
    updatedCourses[index] = newCourse;
    console.log(updatedCourses);
    setCourses(updatedCourses);
    setEditCourseIndex(null);
  };

  useEffect(() => {
    const func = async () => {
      try {
        const res = await fetch(`http://localhost:8080/profile/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data.user);
          setName(data.user.name);
          setDegree(data.user.degree);
          setProfileImage("data:image/jpeg;base64," + data.user.profilephoto);
          setBackgroundImage("data:image/jpeg;base64," + data.user.bannerphoto);
          setDescriptionProfileDescription(data.user.about);
          setSkills(data.user.skills);
          setAchievements(data.user.achievements);
          setBlogpostsBlogPosts(data.user.blogposts);
          setCredentials(data.user.credentials);
          setProjects(data.user.projects);
          setCourses(data.user.courses);
        } else {
          alert("Error fetching details. Please reload the page");
        }
      } catch (error) {
        alert("Error fetching details. Please reload the page");
      }
    };

    func();
  }, []);

  useEffect(() => {}, [
    profileImage,
    backgroundImage,
    descriptionProfileDescription,
    skills,
    achievements,
    credentials,
    projects,
    courses,
  ]);

  return (
    <>
      <div
        id="personalProfileMainDiv"
        className={
          showCredentialPopup || showProjectPopup || showCoursePopup
            ? "dimmed"
            : ""
        }
      >
        {/* profileImageAndDetailDiv Section */}
        <div id="profileImageAndDetailDiv">
          <div id="backgroundProfileImageDiv">
            <img
              id="backgroundProfileImageImg"
              src={backgroundImage}
              alt="Background Img"
            />
            {editable && (
              <>
                <label htmlFor="backgroundImageInput">
                  <AddAPhotoIcon
                    id="addBackgroundImageIcon"
                    style={{
                      marginLeft: "85vw",
                      marginTop: "-0.1vw",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="backgroundImageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleBackgroundImageChange}
                />
              </>
            )}
          </div>

          <div id="profileImageDiv">
            <img id="profileImageImg" src={profileImage} alt="Profile Img" />
            {editable && (
              <>
                <label htmlFor="profileImageInput">
                  <AddAPhotoIcon
                    id="addProfileImageIcon"
                    style={{
                      fontSize: "30px",
                      color: "black",
                      marginLeft: "20vw",
                      marginTop: "-3vh",
                      cursor: "pointer",
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleProfileImageChange}
                />
              </>
            )}
          </div>

          <div id="userProfileDescription">
            {isEditingProfileDescription && editable ? (
              <>
                <textarea
                  style={{
                    width: "58vw",
                    marginTop: "0vh",
                    minHeight: "17.7vh",
                  }}
                  ref={textareaRef}
                  value={editedDescriptionProfileDescription}
                  onChange={(e) =>
                    setEditedDescriptionProfileDescription(e.target.value)
                  }
                />
                <DoneIcon
                  onClick={handleSaveClickProfileDescription}
                  style={{
                    position: "relative",
                    left: "0vw",
                    cursor: "pointer",
                  }}
                />
              </>
            ) : (
              <>
                <p>{descriptionProfileDescription}</p>
                {editable && (
                  <>
                    <EditIcon
                      onClick={handleEditClickProfileDescription}
                      style={{
                        position: "relative",
                        left: "57.5vw",
                        cursor: "pointer",
                      }}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div id="userUsernameAndName">
            <p style={{ fontSize: "2em" }}>{degree}</p>
            <p style={{ fontSize: "1.5em" }}>{name}</p>
          </div>
        </div>

        {/* skillAndTopPostDiv Section */}
        <div id="skillAndTopPostDiv">
          <div id="skillsDiv">
            <div id="skillHeading">
              <div id="skillTitle">SKILLS</div>
              {editable && (
                <div id="addSkillIcon">
                  <AddCircleIcon
                    onClick={handleAddSkill}
                    style={{ fontSize: "30px", color: "black" }}
                  />
                </div>
              )}
            </div>
            <div id="skillList">
              <div id="skillListScroller">
                {skills.map((skill, index) => {
                  return (
                    <div key={index} id="skillItemX">
                      <div
                        contentEditable={editingIndexSkills === index}
                        onBlur={(event) => handleSaveSkills(event, index)}
                        ref={(el) => (editRefSkills.current[index] = el)}
                      >
                        {skill}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "right",
                          marginRight: "1vw",
                        }}
                      >
                        {editingIndexSkills !== index ? (
                          <div className="editIcons">
                            {editable && (
                              <>
                                <EditIcon
                                  onClick={() => handleEditSkills(index)}
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginRight: "5px",
                                  }}
                                />
                                <DeleteIcon
                                  onClick={() => handleDeleteSkills(index)}
                                  style={{ fontSize: "20px", color: "black" }}
                                />
                                <ArrowUpwardIcon
                                  onClick={() => handleMoveUpSkills(index)}
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginLeft: "5px",
                                  }}
                                />
                                <ArrowDownwardIcon
                                  onClick={() => handleMoveDownSkills(index)}
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginLeft: "5px",
                                  }}
                                />
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="editIcons">
                            <DoneIcon
                              onClick={() => setEditingIndexSkills(null)}
                              style={{
                                fontSize: "20px",
                                color: "black",
                                marginRight: "5px",
                              }}
                            ></DoneIcon>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="topPostDiv">
            <div id="topPostHeading">
              <div id="topPostTitle">TOP POSTS</div>
            </div>
            <div id="topPostList">
              <div id="topPostListScroller">
                {blogpostsBlogPosts.map((blogpost, index) => {
                  return (
                    <div key={index} id="topPostItemX">
                      <div>{blogpost}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* achievementsAndCredentialsDiv Section */}
        <div id="achievementsAndCredentialsDiv">
          <div id="achievementsDiv">
            <div id="achievementHeading">
              <div id="achievementTitle">ACHIEVEMENTS</div>
              {editable && (
                <div id="addAchievementIcon">
                  <AddCircleIcon
                    onClick={handleAddAchievement}
                    style={{ fontSize: "30px", color: "black" }}
                  />
                </div>
              )}
            </div>
            <div id="achievementList">
              <div id="achievementListScroller">
                {achievements.map((achievement, index) => {
                  return (
                    <div key={index} id="achievementItemX">
                      <div
                        contentEditable={editingIndexAchievements === index}
                        onBlur={(event) => handleSaveAchievements(event, index)}
                        ref={(el) => (editRefAchievements.current[index] = el)}
                      >
                        {achievement}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "right",
                          marginRight: "1vw",
                        }}
                      >
                        {editingIndexAchievements !== index ? (
                          <div className="editIcons">
                            {editable && (
                              <>
                                <EditIcon
                                  onClick={() => handleEditAchievements(index)}
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginRight: "5px",
                                  }}
                                />
                                <DeleteIcon
                                  onClick={() =>
                                    handleDeleteAchievements(index)
                                  }
                                  style={{ fontSize: "20px", color: "black" }}
                                />
                                <ArrowUpwardIcon
                                  onClick={() =>
                                    handleMoveUpAchievements(index)
                                  }
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginLeft: "5px",
                                  }}
                                />
                                <ArrowDownwardIcon
                                  onClick={() =>
                                    handleMoveDownAchievements(index)
                                  }
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginLeft: "5px",
                                  }}
                                />
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="editIcons">
                            <DoneIcon
                              onClick={() => setEditingIndexAchievements(null)}
                              style={{
                                fontSize: "20px",
                                color: "black",
                                marginRight: "5px",
                              }}
                            ></DoneIcon>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div id="credentialsDiv">
            <div id="credentialHeading">
              <div id="credentialTitle">CREDENTIALS</div>
              <button onClick={() => setShowCredentialPopup(true)}>
                {editable && (
                  <div id="addCredentialIcon">
                    <AddCircleIcon
                      style={{ fontSize: "30px", color: "black" }}
                    />
                  </div>
                )}
              </button>
            </div>
            <div id="credentialList">
              <div id="credentialListScroller">
                {credentials.map((credential, index) => {
                  return (
                    <div key={index} id="credentialItemX">
                      <div
                        contentEditable={editingCredentialIndex === index}
                        ref={(el) =>
                          (editRefCredentialPosts.current[index] = el)
                        }
                        id="credentialItemPost"
                      >
                        {credential.post}
                      </div>
                      <div
                        contentEditable={editingCredentialIndex === index}
                        ref={editRefCredentialOrganization}
                        id="credentialItemOrganization"
                      >
                        {credential.organization}
                      </div>
                      <div
                        ref={editRefCredentialFromTo}
                        id="credentialItemFromTo"
                      >
                        <span
                          contentEditable={editingCredentialIndex === index}
                        >
                          {credential.from}
                        </span>
                        <span>-</span>
                        <span
                          contentEditable={editingCredentialIndex === index}
                        >
                          {credential.to}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "right",
                          marginRight: "1vw",
                        }}
                      >
                        {editingCredentialIndex !== index ? (
                          <div className="editIcons">
                            {editable && (
                              <>
                                <EditIcon
                                  onClick={() => handleEditCredential(index)}
                                  style={{
                                    fontSize: "20px",
                                    color: "black",
                                    marginRight: "5px",
                                  }}
                                />
                                <DeleteIcon
                                  onClick={() => handleDeleteCredential(index)}
                                  style={{ fontSize: "20px", color: "black" }}
                                />
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="editIcons">
                            <DoneIcon
                              onClick={(event) =>
                                handleSaveCredential(event, index)
                              }
                              style={{
                                fontSize: "20px",
                                color: "black",
                                marginRight: "5px",
                              }}
                            ></DoneIcon>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* projectsListDiv Section */}
        <div id="projectsListDiv">
          <div id="projectHeading">
            <div id="projectTitle">PROJECTS</div>
            {editable && (
              <button onClick={() => setShowProjectPopup(true)}>
                <div id="addProjectIcon">
                  <AddCircleIcon style={{ fontSize: "30px", color: "black" }} />
                </div>
              </button>
            )}
          </div>
          <div id="projectList">
            <div id="projectListScroller">
              {projects.map((project, index) => {
                return (
                  <div key={index} id="projectItemX">
                    <div
                      contentEditable={editProjectIndex === index}
                      ref={(el) => (editRefProjectNames.current[index] = el)}
                      id="credentialItemPost"
                    >
                      {project.name}
                    </div>
                    <div
                      contentEditable={editProjectIndex === index}
                      ref={editRefProjectInstructor}
                      id="credentialItemOrganization"
                    >
                      {project.instructorname}
                    </div>
                    <div
                      ref={editRefCredentialFromTo}
                      id="credentialItemFromTo"
                    >
                      <span contentEditable={editProjectIndex === index}>
                        {project.from}
                      </span>
                      <span>-</span>
                      <span contentEditable={editProjectIndex === index}>
                        {project.to}
                      </span>
                    </div>
                    <div
                      contentEditable={editProjectIndex === index}
                      ref={editRefProjectSkills}
                      id="credentialItemFromTo"
                    >
                      {project.skills.join(",")}
                    </div>
                    <div
                      contentEditable={editProjectIndex === index}
                      ref={editRefProjectDescription}
                      id="credentialItemFromTo"
                    >
                      {project.description.split(" ").slice(0, 50).join(" ")}
                      {project.description.split(" ").length > 50 ? "..." : ""}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginRight: "1vw",
                      }}
                    >
                      {editProjectIndex !== index ? (
                        <div className="editIcons">
                          {editable && (
                            <>
                              <EditIcon
                                onClick={() => handleEditProject(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginRight: "5px",
                                }}
                              />
                              <DeleteIcon
                                onClick={() => handleDeleteProject(index)}
                                style={{ fontSize: "20px", color: "black" }}
                              />
                              <ArrowUpwardIcon
                                onClick={() => handleMoveUpProject(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginLeft: "5px",
                                }}
                              />
                              <ArrowDownwardIcon
                                onClick={() => handleMoveDownProject(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginLeft: "5px",
                                }}
                              />
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="editIcons">
                          <DoneIcon
                            onClick={(event) => handleSaveProjets(event, index)}
                            style={{
                              fontSize: "20px",
                              color: "black",
                              marginRight: "5px",
                            }}
                          ></DoneIcon>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* coursesTakenListDiv Section */}
        <div id="coursesTakenListDiv">
          <div id="courseHeading">
            <div id="courseTitle">COURSES TAKEN</div>
            {editable && (
              <button onClick={() => setShowCoursePopup(true)}>
                <div id="addCourseIcon">
                  <AddCircleIcon style={{ fontSize: "30px", color: "black" }} />
                </div>
              </button>
            )}
          </div>
          <div id="courseList">
            <div id="courseListScroller">
              {courses.map((course, index) => {
                return (
                  <div key={index} id="courseItemX">
                    <div
                      contentEditable={editCourseIndex === index}
                      ref={(el) => (editRefCourseNames.current[index] = el)}
                      id="credentialItemPost"
                    >
                      {course.coursename}
                    </div>
                    <div
                      contentEditable={editCourseIndex === index}
                      ref={editRefCourseInstructor}
                      id="credentialItemOrganization"
                    >
                      {course.instructorname}
                    </div>
                    <div
                      contentEditable={editCourseIndex === index}
                      ref={editRefCourseDescription}
                      id="credentialItemFromTo"
                    >
                      {course.description.split(" ").slice(0, 50).join(" ")}
                      {course.description.split(" ").length > 50 ? "..." : ""}
                    </div>
                    <div
                      contentEditable={editCourseIndex === index}
                      ref={editRefCourseYear}
                      id="credentialItemFromTo"
                    >
                      {course.year}
                    </div>
                    <div
                      contentEditable={editCourseIndex === index}
                      ref={editRefCourseSemester}
                      id="credentialItemFromTo"
                    >
                      {course.semester}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginRight: "1vw",
                      }}
                    >
                      {editCourseIndex !== index ? (
                        <div className="editIcons">
                          {editable && (
                            <>
                              <EditIcon
                                onClick={() => handleEditCourse(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginRight: "5px",
                                }}
                              />
                              <DeleteIcon
                                onClick={() => handleDeleteCourse(index)}
                                style={{ fontSize: "20px", color: "black" }}
                              />
                              <ArrowUpwardIcon
                                onClick={() => handleMoveUpCourse(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginLeft: "5px",
                                }}
                              />
                              <ArrowDownwardIcon
                                onClick={() => handleMoveDownCourse(index)}
                                style={{
                                  fontSize: "20px",
                                  color: "black",
                                  marginLeft: "5px",
                                }}
                              />
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="editIcons">
                          <DoneIcon
                            onClick={(event) => handleSaveCourse(event, index)}
                            style={{
                              fontSize: "20px",
                              color: "black",
                              marginRight: "5px",
                            }}
                          ></DoneIcon>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* showCredentialPopup */}
      {showCredentialPopup && (
        <div id="credentialPopup">
          <h2 id="credentialPopupHeading">
            {editingCredentialIndex !== null
              ? "Edit Credential"
              : "Enter Details"}
          </h2>
          <form onSubmit={handleAddCredentialSubmit} id="credentialForm">
            <input
              type="text"
              name="post"
              placeholder="Enter the Position"
              autoComplete="off"
              value={newCredential.post}
              onChange={handleInputChangeCredential}
              required
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              autoComplete="off"
              value={newCredential.organization}
              onChange={handleInputChangeCredential}
              required
            />
            <input
              type="text"
              name="from"
              placeholder="Starting date in Month'YY format"
              autoComplete="off"
              value={newCredential.from}
              onChange={handleInputChangeCredential}
              required
            />
            <input
              type="text"
              name="to"
              placeholder="Till"
              autoComplete="off"
              value={newCredential.to}
              onChange={handleInputChangeCredential}
            />
            <button type="submit" id="addNewCredBtn">
              Add Credential
            </button>
          </form>
          <button onClick={() => setShowCredentialPopup(false)}>
            <div id="closeBtn">Cancel</div>
          </button>
        </div>
      )}

      {/* showProjectPopup */}
      {showProjectPopup && (
        <div id="projectPopup">
          <h2 id="projectPopupHeading">
            {editProjectIndex !== null ? "Edit Project" : "Enter Details"}
          </h2>
          <form onSubmit={handleAddProjectSubmit} id="projectForm">
            <input
              type="text"
              name="name"
              placeholder="Enter the Project Name"
              autoComplete="off"
              value={newProject.name}
              onChange={handleInputChangeProject}
              required
            />
            <input
              type="text"
              name="instructorname"
              placeholder="Instructor Name"
              autoComplete="off"
              value={newProject.instructorname}
              onChange={handleInputChangeProject}
              required
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              autoComplete="off"
              value={newProject.skills}
              onChange={handleInputChangeProject}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              autoComplete="off"
              value={newProject.description}
              onChange={handleInputChangeProject}
              required
            />
            <input
              type="text"
              name="from"
              placeholder="Starting date in Month'YY format"
              autoComplete="off"
              value={newProject.from}
              onChange={handleInputChangeProject}
              required
            />
            <input
              type="text"
              name="to"
              placeholder="Till"
              autoComplete="off"
              value={newProject.to}
              onChange={handleInputChangeProject}
            />
            <button type="submit" id="addNewProjectBtn">
              Add Project
            </button>
          </form>
          <button onClick={() => setShowProjectPopup(false)}>
            <div id="closeBtn">Cancel</div>
          </button>
        </div>
      )}

      {/* showCoursePopup */}
      {showCoursePopup && (
        <div id="coursePopup">
          <h2 id="coursePopupHeading">
            {editCourseIndex !== null ? "Edit Course" : "Enter Details"}
          </h2>
          <form onSubmit={handleAddCourseSubmit} id="courseForm">
            <input
              type="text"
              name="coursename"
              placeholder="Enter the Course Name"
              autoComplete="off"
              value={newCourse.coursename}
              onChange={handleInputChangeCourse}
              required
            />
            <input
              type="text"
              name="instructorname"
              placeholder="Instructor Name"
              autoComplete="off"
              value={newCourse.instructorname}
              onChange={handleInputChangeCourse}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              autoComplete="off"
              value={newCourse.description}
              onChange={handleInputChangeCourse}
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              autoComplete="off"
              value={newCourse.year}
              onChange={handleInputChangeCourse}
              required
            />
            <input
              type="text"
              name="semester"
              placeholder="Semester"
              autoComplete="off"
              value={newCourse.semester}
              onChange={handleInputChangeCourse}
              required
            />
            <button type="submit" id="addNewCourseBtn">
              Add Course
            </button>
          </form>
          <button onClick={() => setShowCoursePopup(false)}>
            <div id="closeBtn">Cancel</div>
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
