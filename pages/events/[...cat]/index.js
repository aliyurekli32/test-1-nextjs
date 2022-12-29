import Link from "next/link";


const Page = (props) => {
  const data=props.title;
  console.log(data);
  
    
  return <div> {data.map((item)=>{
    return(
        <>
        <Link href={`/events/*/${item.id}`}>{item.name}</Link>
        </>
    )
  })} </div>;
};

export default Page;

export const getStaticProps =async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{
            title: data
        }
    }
}
