export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px' }}>
      <h2>EventHub AI Application</h2>
      <p>This full-stack app is deployed using DevOps CI/CD pipeline.</p>
      <p>Backend API URL: <a href="http://YOUR_PUBLIC_IP:5000/api/message">http://YOUR_PUBLIC_IP:5000/api/message</a></p>
    </div>
  );
}
