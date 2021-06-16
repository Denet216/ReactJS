import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png' alt='qwe' />
      </header>
      <nav className='nav'>
        <div>
        <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
          </div>
         <div>
            <a href='#'>Main Content</a>
            </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://static.mir-kubikov.ru/upload/iblock/796/796e50f8891669bd30a9c39cb6ad4269.jpg' alt=''/>
      </div>
      <div>
      ava + discription
      </div>
      <div>
        My post
        <div>new post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
    </div>
  );
}

export default App;
