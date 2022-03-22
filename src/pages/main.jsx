import react from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import '../css/main.css'
import Nav from '../components/navbar'

const Main=()=>{


    return(
        <div >
            <Nav/>
            <section className="calContainer"> 
             <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Doctors App 2:00', date: '2022-03-30' },
          { title: 'event 2', date: '2022-04-02' }
        ]}
      />
      </section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Natus recusandae incidunt excepturi nam pariatur quas nulla alias repellat.
            Numquam maxime dolorem, enim ullam quidem ut aliquid deserunt? Eligendi,
             commodi totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facilis quos tenetur reiciendis ut id ipsam inventore, dolorem doloribus fugiat perferendis, molestias, ullam deserunt quasi dicta ea labore vel quo totam hic distinctio voluptate. Dolor corporis, non excepturi ducimus autem molestiae in ipsam corrupti sunt iusto, ullam dolore cumque minima quos ad eveniet aut nam. Veniam ducimus magni at sequi dignissimos. Cumque, adipisci. Dolor eius consequuntur, odit laborum magni suscipit pariatur dolore fugit veritatis. Nihil?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam, odit numquam cumque molestias nesciunt? Debitis quaerat atque veritatis, reiciendis sed totam iste, doloremque eaque adipisci placeat ducimus incidunt officia, blanditiis numquam autem nostrum corrupti deleniti? Amet doloribus harum quis, eaque ipsam obcaecati in tempore provident at odit ad repellendus eos fuga excepturi accusantium! Mollitia maxime nesciunt illum ab id omnis quia at veritatis obcaecati! Possimus nisi sit iure vel reprehenderit placeat neque dicta tenetur natus voluptates ipsum nesciunt, libero soluta quasi saepe esse, expedita porro, vitae sunt! Explicabo laudantium amet odit sint, dolores natus ullam tenetur veniam esse aut! Numquam quidem debitis reiciendis, nobis sed incidunt facilis labore facere maxime repellendus architecto, voluptate rerum deleniti odit recusandae. Provident, nemo sapiente enim eius repudiandae quasi officiis rem non est, deserunt in libero. Cum fuga distinctio aliquid quis dignissimos eveniet illo veniam debitis quas inventore deleniti provident beatae, quos omnis eum atque voluptate dolores numquam in modi vel sapiente. Quibusdam quam, debitis eum exercitationem adipisci alias? Inventore voluptas soluta nesciunt. Dignissimos et cupiditate delectus velit voluptate dolor aliquam iste? Nesciunt neque dicta pariatur molestiae incidunt voluptas harum tenetur minus, quibusdam, aliquid dolor aut? Commodi veniam assumenda perferendis esse laboriosam pariatur corporis excepturi, vel fugit libero, doloribus ducimus sit aut natus. Non, similique repellat repellendus blanditiis autem quam optio dolor mollitia recusandae velit temporibus quod est maxime soluta ipsam ea quas voluptates ipsum eveniet magnam aliquam quidem laudantium voluptatibus consequuntur. Quas, fugit? Dolor, illo recusandae! Itaque culpa, voluptate a minima voluptas velit perferendis omnis id inventore dignissimos eligendi iure ipsa cumque veniam quidem mollitia sapiente odio odit dolores dolor maiores corporis provident,agni quisquam veniam enim accusantium soluta. Corporis, error! Quasi neque dolor labore temporibus recusandae, animi excepturi adipisci, ducimus doloribus omnis at atque, expedita id ipsa sunt sint unde. Perspiciatis a temporibus molestias, voluptates, aliquid odit magni voluptate veniam minima unde dolorum. Fuga dicta cumque sint fugiat nulla quis velit magnam aut, eum illo similique, qui sequi reiciendis, tempora nam animi? Dolor consequatur quia consequuntur saepe provident error laudantium?!</p>
        </div>
    )
}


export default Main