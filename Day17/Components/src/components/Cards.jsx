import cric from '../assets/download.jpeg'; 

export function Cards({pic,title, desc  }){
    return(
        <>
        <div className="card">
            <img className='photo' src={pic} alt='a photo'/>
            <h4 className='title'> {title}</h4>
            <p className='desc'> {desc} </p>

        </div>
        </>
    )

}