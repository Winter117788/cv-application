// EducationExperience.js
import React, { useState } from 'react'; // 导入React和useState

// 创建EducationExperience组件
function EducationExperience() {
  // 定义state变量来存储学校名称、专业和学习日期
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  
  // 管理是否处于编辑模式
  const [isEditing, setIsEditing] = useState(true);

  // 表单提交时的处理函数
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认提交行为
    setIsEditing(false); // 切换为非编辑模式
  };

  // 处理编辑按钮点击事件
  const handleEdit = () => {
    setIsEditing(true); // 切换回编辑模式
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {/* 根据isEditing状态来决定展示表单还是已提交的信息 */}
      {isEditing ? (
        // 显示输入表单
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="School Name"
            value={school}
            onChange={(e) => setSchool(e.target.value)} // 更新学校名称
          />
          <input
            type="text"
            placeholder="Title of Study"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // 更新专业名称
          />
          <input
            type="text"
            placeholder="Date of Study"
            value={date}
            onChange={(e) => setDate(e.target.value)} // 更新学习日期
          />
          <button type="submit">Submit</button> {/* 提交按钮 */}
        </form>
      ) : (
        // 显示已提交的信息
        <div>
          <p>School: {school}</p>
          <p>Title: {title}</p>
          <p>Date: {date}</p>
          <button onClick={handleEdit}>Edit</button> {/* 编辑按钮 */}
        </div>
      )}
    </div>
  );
}

export default EducationExperience; // 导出组件
