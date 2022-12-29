export const getStaticPaths =async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths =data.map((item)=>{
    return{
      params: { id: item.id.toString()}
    }
  })

  return {
      paths,
      fallback: false
  }
}


const Page = () => {
  return <div>Users Page</div>;
};

export default Page;
