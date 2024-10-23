import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo'; // 导入GeneralInfo组件
import EducationExperience from './components/EducationExperience'; // 导入EducationExperience组件
import PracticalExperience from './components/PracticalExperience'; // 导入PracticalExperience组件

// 创建App组件
function App() {
  return (
    <div>
      <h1>CV Application</h1>
      <div class='container'>
      {/* 使用GeneralInfo、EducationExperience和PracticalExperience组件 */}
      <GeneralInfo />
      <EducationExperience />
      <PracticalExperience />
      </div>
    </div>
  );
}

export default App;
