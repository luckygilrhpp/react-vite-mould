import './index.scss'
import{Card,Button,Input,Form} from 'antd'



const Login =()=>{
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className='login'>
      <Card className='login_container'>
        <img src="" alt="" />
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
           name="mobile"
           //多条校验逻辑 先校验第一条 顺序校验
           rules={[
             {
               required: true,
               message: '请输入手机号',
             },
             {
              pattern:/^1[3-9]\d{9}$/,
              message:'手机号格式不正确',
              validateTrigger:'onBlur',
             }
           ]}
          >
            <Input placeholder="请输入手机号"/>
          </Form.Item>
          <Form.Item
           name="code"
           rules={[
             {
               required: true,
               message: '请输入验证码',
             },
           ]}
          >
            <Input placeholder="请输入验证码"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login;