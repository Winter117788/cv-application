// PracticalExperience.js
import React, { useState } from 'react'; // 导入React和useState

// 创建PracticalExperience组件
function PracticalExperience() {
  // 定义state变量存储公司、职位、职责和日期
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [date, setDate] = useState('');
  
  // 管理编辑状态
  const [isEditing, setIsEditing] = useState(true);

  // 提交表单时的处理函数
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // 编辑按钮点击处理函数
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Practical Experience</h2>
      {isEditing ? (
        // 显示输入表单
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)} // 更新公司名称
          />
          <input
            type="text"
            placeholder="Position Title"
            value={position}
            onChange={(e) => setPosition(e.target.value)} // 更新职位
          />
          <input
            type="text"
            placeholder="Main Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)} // 更新职责
          />
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)} // 更新工作日期
          />
          <button type="submit">Submit</button> {/* 提交按钮 */}
        </form>
      ) : (
        // 显示已提交信息
        <div>
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilities}</p>
          <p>Date: {date}</p>
          <button onClick={handleEdit}>Edit</button> {/* 编辑按钮 */}
        </div>
      )}
    </div>
  );
}

export default PracticalExperience; // 导出组件
