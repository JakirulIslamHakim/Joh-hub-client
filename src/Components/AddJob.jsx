import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import 'react-tabs/style/react-tabs.scss';
import "./addJob.css";
import Container from "../utils/Container";

const AddJob = () => {
  return (
    <Container>
      <div className="border border-red-600">
        <Tabs>
          <TabList>
            <Tab className={"text-3xl"}><button className="btn btn-primary">Title 1</button> </Tab>
            <Tab className={"text-3xl"}>Title 2</Tab>
            <Tab className={"text-3xl"}>Title 3</Tab>
            <Tab className={"text-3xl"}>Title 4</Tab>
            <Tab className={"text-3xl"}>Title 5</Tab>
          </TabList>

          <TabPanel>
            <h2>This is hakim</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              modi eligendi ea similique fugiat, sunt quae voluptas, nisi ullam
              vitae iusto facere cumque corrupti, esse labore voluptatibus quis!
              Nobis earum quisquam dolorum consequuntur nesciunt. Debitis ut
              quos labore alias impedit at! Sunt aut, fugit dolores vero saepe
              debitis laboriosam ex unde veniam rerum dicta quisquam
              exercitationem similique assumenda repellat eaque aliquam
              obcaecati ipsa, dolore labore! Pariatur repudiandae mollitia
              possimus nemo aliquid. Quisquam minima quibusdam eveniet
              temporibus hic quia placeat libero numquam dolor, nam, ad sed
              pariatur itaque vitae amet similique excepturi dolore odio?
              Quisquam expedita consequuntur voluptates, fugiat inventore
              doloribus harum impedit reiciendis nostrum velit exercitationem
              perspiciatis suscipit minus quae? Quaerat blanditiis sunt
              praesentium accusantium non deleniti, hic quos esse ut asperiores,
              eum minima minus laborum itaque. Aspernatur, error. Amet corporis,
              esse velit id molestiae sed corrupti veniam sunt quibusdam
              aliquid, eveniet sequi temporibus praesentium ea ipsam blanditiis
              natus eius consequuntur earum dolores necessitatibus, est
              voluptates! Eligendi magnam dicta similique, voluptatem officia
              repudiandae praesentium maxime dolores dolorum dolore cum nobis?
              Harum repudiandae similique dolorum ea! Et iste sint dolore
              quaerat suscipit eius numquam corporis eligendi, sequi itaque enim
              obcaecati sunt pariatur, quae ab praesentium illo doloremque
              nostrum nam impedit officiis.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>THis is sakinm</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatum minima iste. Vel eveniet laudantium
              perspiciatis maiores ratione beatae non rerum voluptatem aliquam
              fugit. Itaque, quas, autem cupiditate pariatur laboriosam nam vero
              provident quos aut omnis vitae. Iste quia repellendus, officia et
              in sequi! Accusamus libero deserunt veniam modi, nisi incidunt.
              Inventore consectetur nam architecto officia maxime ullam
              voluptatem necessitatibus aperiam recusandae quas alias quaerat,
              dicta, at libero! At, unde quis assumenda eveniet fugiat, debitis
              impedit obcaecati, cumque saepe molestias quam vitae similique
              officia. Repudiandae, quisquam. Repudiandae placeat porro
              similique cupiditate consequatur fugiat quo nulla quas?
              Voluptates, quia id nobis enim molestiae vitae, commodi voluptate
              tempora quam hic, cumque asperiores delectus et quae earum! Sint
              odio explicabo, dolore quidem ea ducimus dignissimos iusto enim
              eaque quis, voluptatibus voluptatum voluptates atque! Perspiciatis
              velit sapiente asperiores, vero dolores ex reiciendis non laborum
              architecto dolorem maxime, vitae tenetur, iusto atque quis fuga
              minus commodi. Reprehenderit fugit quod officiis numquam iure, quo
              eius obcaecati, enim quas dignissimos, neque quaerat blanditiis
              odio ea adipisci praesentium vitae. Aspernatur quae dignissimos
              voluptatibus libero voluptas neque ullam facere quam, quia
              possimus non velit dolor dolore. Maxime aperiam doloribus quaerat
              sunt placeat recusandae, sit accusamus ipsum totam modi nemo.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default AddJob;
