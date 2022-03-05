import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import Container from './Container/Container'
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from './Profile/user.json';
import data from './Statistics/data.json'
import friends from './FriendListItem/friends.json'
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <div>
      <Container>
     <Profile username = {user.username}
     tag = {user.tag}
     location = {user.location}
     avatar = {user.avatar} 
     followers = {user.stats.followers}
     views = {user.stats.views}
     likes = {user.stats.likes} />
     </Container>
     <Container>
    <Statistics 
    title="Upload stats" stats={data} />
    </Container>
    <Container>
<Statistics stats={data} />
</Container>
<Container>
<FriendList friends ={friends} />
</Container>
<Container>
<TransactionHistory items={transactions} />
</Container>
    </div>
  );
};
