import React, { useState } from 'react';

/* Components */
import Project from '../../components/Project';
import BasicModal from '../../components/Modal/BasicModal';

/* Images */
import imagesOfTheProjects from '../../data/images/projects';

/* Styles */
import './Work.css';

export default props => {
  const { data } = props;

  const [ showBasicModal, setShowBasicModal ] = useState(false);
  const [ basicModalContent, setBasicModalContent ] = useState(null);

  const openBasicModal = content => {
    setBasicModalContent(content);
    setShowBasicModal(true);
  }
  
  data.projects.map((project, index) => project.images = imagesOfTheProjects[index]);

  return (
    <>
      <main className="page work flex-container">
        <div className="work-information">
          <h1>{ data.title }</h1>
          <p>{ data.description }</p>
        </div>
        {
          data.projects.map((project, index) => (
            <Project
              openBasicModal={ openBasicModal }
              data={ project }
              key={ index }
            />
          ))
        }
      </main>
      <BasicModal
        show={ showBasicModal }
        setShow={ setShowBasicModal }
      >
        { basicModalContent }
      </BasicModal>
    </>
  );
}