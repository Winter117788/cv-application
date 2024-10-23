// GeneralInfo.js
import React, { useState } from 'react'; // 从React库中导入useState Hook，用于管理组件的状态

// 创建GeneralInfo组件
function GeneralInfo() {
  // 定义三个state变量来存储用户输入的姓名、电子邮件和电话
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // 定义一个state变量来管理是否处于编辑模式
  const [isEditing, setIsEditing] = useState(true);

  // 表单提交时的处理函数，阻止表单默认行为并切换到展示模式
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止页面刷新
    setIsEditing(false); // 切换为显示已输入信息
  };

  // 处理编辑按钮的点击事件，切换回编辑模式
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>General Information</h2>
      {/* 根据isEditing状态来决定展示表单还是信息 */}
      {isEditing ? (
        // 如果isEditing为true，显示输入表单
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // 更新name的state
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // 更新email的state
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // 更新phone的state
          />
          <button type="submit">Submit</button> {/* 提交按钮 */}
        </form>
      ) : (
        // 如果isEditing为false，显示已输入的内容
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={handleEdit}>Edit</button> {/* 编辑按钮 */}
        </div>
      )}
    </div>
  );
}

export default GeneralInfo; // 导出组件
