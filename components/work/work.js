import Button from "../button";
import CasePreview, {
  Mockup,
  Slide,
  VideoSlide,
  Colophon,
} from "./case_preview";

// Each gallery slide is a 534×444 frame of flat transparent mockup PNGs positioned in %;
// a Slide's `shadow` drives the CSS shadow and `bg` shows through the gaps. Content
// (subtitles, credits, summaries, alt text) lives here in the markup.
// See AGENTS.md › Content lives in the markup.
export default function Work() {
  return (
    <section id="work" className="work grid">
      <h2 className="work_title content_heading">Work</h2>

      <div className="work_cases content_media">
        <CasePreview
          logo="stone"
          name="Stone"
          subtitle="Online Catalog"
          year="2025"
          featured
          cta={
            <>
              <p className="work_summary">
                Helping small businesses showcase their products online and
                generate more sales opportunities.
              </p>
              <Button size="medium" href="/work/catalog" classes="work_button">
                Read the case
              </Button>
            </>
          }
        >
          <Colophon
            activities="Product Discovery, Product Design, Usability Testing"
            designers="Sérgio Fontes, Vinícius Alcântara, Fausto Junior"
          />

          <Slide bg="#f7dfcf" shadow="large">
            <Mockup
              name="preview_stone_mockup_2"
              left={2.7}
              top={25.8}
              width={32}
              alt="Boni Burger’s online catalog home on a phone — a hero banner of burgers, the BB logo, a tagline with a “Visite nosso catálogo” button, and the shop’s address and opening hours."
            />
            <Mockup
              name="preview_stone_mockup_3"
              left={65.2}
              top={25.8}
              width={32}
              alt="The catalog’s product list on a phone — a search field, the Burgers/Especiais/Acompanhamentos category tabs, and burger cards such as “Boni Clássico” (R$ 32,00) and “Boni Bacon” (R$ 36,00), each with a photo and short description."
            />
            <Mockup
              name="preview_stone_mockup_1"
              left={31.1}
              top={10.8}
              width={37.6}
              alt="A product page on a phone — a large photo of the “Boni Clássico” burger, its R$ 32,00 price, the full ingredient list, and an add-to-cart button."
            />
          </Slide>

          <Slide bg="#f2e1e1" shadow="small">
            <Mockup
              name="preview_stone_mockup_sharing"
              left={3.7}
              top={-41}
              width={92.5}
              alt="The catalog’s content shared across channels — Boni Burger’s “Boni Clássico” appearing in Instagram posts and stories, X posts, direct-message replies, and rich link previews of the store."
            />
          </Slide>

          <VideoSlide
            href="https://www.youtube.com/watch?v=J0cINzc2ziE"
            label="Watch the Online Catalog promotional video"
          >
            <Mockup
              name="video_promo"
              dir="catalog"
              scales={[1, 2]}
              alt="A still from the promotional video — a WhatsApp-style chat where a customer messages Boni Burger asking to see the menu."
            />
          </VideoSlide>
        </CasePreview>

        <CasePreview
          logo="vtex"
          name="VTEX"
          subtitle="Grocery Starter Pack"
          year="2022"
        >
          <Colophon
            activities="Interface Design"
            designers="Sérgio Fontes, Nathália Moura"
          />

          <Slide bg="#f3f6e1" shadow="medium">
            <Mockup
              name="preview_vtex_mockup_2"
              left={2.81}
              top={-5.37}
              width={30.05}
              alt="The FreshStore grocery app on a phone — the “Vegetables & Fruits” category with 192 items, filter chips, a sort control, and a “Go vegan for the month!” promotional banner."
            />
            <Mockup
              name="preview_vtex_mockup_3"
              left={34.98}
              top={12.7}
              width={30.05}
              alt="The “Fruits” product list on a phone — cards for items like Organic Monalisa Potato and Black Seedless Grape, each showing its price, a unit selector, and an add button."
            />
            <Mockup
              name="preview_vtex_mockup_5"
              left={67.14}
              top={29.93}
              width={30.05}
              alt="The cart summary on a phone — 27 items, substitution preferences, a free-shipping note, the running subtotal and savings, and a “Proceed to Checkout” button."
            />
          </Slide>

          <Slide bg="#f5f5f5" shadow="medium">
            {/* annotated diagram (labels + leader lines), not a floating mockup */}
            <Mockup
              name="preview_vtex_specs"
              shadow="none"
              left={17.04}
              top={5.41}
              width={67.6}
              alt="An annotated breakdown of the web product card — labels pointing out the favourite, recurring-item and organic flags, the add-to-cart button, the price and promo tag, and the unit selector."
            />
            {/* reads as smaller cards within the frame */}
            <Mockup
              name="preview_vtex_cards"
              shadow="small"
              left={-7.12}
              top={58.78}
              width={118.46}
              alt="A row of web product cards in different states — default cards with an add button beside cards switched to a quantity stepper after being added, including “take 3, pay 2” promo tags."
            />
          </Slide>

          <Slide bg="#fceef2" shadow="medium">
            <Mockup
              name="preview_vtex_mockup_8"
              left={2.81}
              top={12.61}
              width={30.05}
              alt="The delivery setup on a phone — a “Where do you want to receive your order?” dialog asking for a ZIP code over the dimmed store."
            />
            <Mockup
              name="preview_vtex_mockup_9"
              left={34.92}
              top={12.61}
              width={30.05}
              alt="The same dialog with a ZIP code being typed — a “Use current location” option and matching ZIP suggestions appear above the keyboard."
            />
            <Mockup
              name="preview_vtex_mockup_10"
              left={67.03}
              top={12.61}
              width={30.05}
              alt="The next step on a phone — “How do you want to receive your order?” offering “Delivery to Your Address” or “Pickup at Store,” each with its conditions."
            />
          </Slide>
        </CasePreview>

        <CasePreview
          logo="petplate"
          name="PetPlate"
          subtitle="Ecommerce Redesign"
          year="2021"
        >
          <Colophon
            activities="Product Design, Design System, Front-end Development"
            designers="Sérgio Fontes, Renata Motta, Nathália Moura, Filipe Soares, Fanny Chien"
          />

          <Slide bg="#deedff" shadow="medium" fill>
            <Mockup
              name="preview_petplate_mockup_1"
              left={-17.12}
              top={5.41}
              width={112.32}
              alt="A PetPlate product page on the web — the “Chicken Apple Sausage Bites 4-Pack,” with its star rating, $30 price, quantity stepper, a “Buy 4-Pack” button, and a meal-plan add-on option."
            />
            <Mockup
              name="preview_petplate_mockup_2"
              left={2.81}
              top={18.42}
              width={31.84}
              alt="The same product on a phone — the “Chicken Apple Sausage Bites 4-Pack” page with its photo carousel, rating, and price."
            />
          </Slide>

          <Slide bg="#fff4cc" shadow="medium" fill>
            <Mockup
              name="preview_petplate_mockup_4"
              left={-13.05}
              top={5.41}
              width={108.33}
              alt="A dog’s meal-plan dashboard on the PetPlate website — Momo the Samoyed’s profile and feeding needs, the current Meal Plan and next-box total, and the meals and treats included."
            />
          </Slide>

          <Slide bg="#deedff" shadow="medium" fill>
            <Mockup
              name="preview_petplate_mockup_3"
              left={4.74}
              top={5.41}
              width={108.33}
              alt="The plan-switching dialog on the PetPlate website — comparing the recommended “Full Plan” against the “Topper Plan,” each with its calories, cadence, and price."
            />
          </Slide>

          <Slide bg="#fff4cc" shadow="medium" fill>
            {/* the express-checkout cards read as smaller within the frame */}
            <Mockup
              name="preview_petplate_mockup_5"
              shadow="small"
              left={-6.18}
              top={32.66}
              width={28.5}
              alt="The express checkout on a card — a “Welcome!” step asking the customer to pick a payment option, offering Apple Pay or credit card."
            />
            <Mockup
              name="preview_petplate_mockup_6"
              shadow="small"
              left={20.04}
              top={21.62}
              width={28.5}
              alt="The checkout’s shipping-address step — a form for contact and address details above the payment-info section."
            />
            <Mockup
              name="preview_petplate_mockup_7"
              left={46.25}
              top={10.59}
              width={28.5}
              alt="The “Review Your Order” step — the shipping address, payment info, and an order summary totaling $30, with a “Finish Order” button."
            />
            <Mockup
              name="preview_petplate_mockup_8"
              left={72.47}
              top={-0.23}
              width={28.5}
              alt="The “Thank You — Order Confirmed” step — the order number, delivery date, and shipping address, with “Refer a Friend” and “Go to My Account” actions."
            />
          </Slide>
        </CasePreview>

        {/* Guava — each frame repeats the previous window bleeding in for continuity. */}
        <CasePreview
          logo="guava"
          name="Guava"
          subtitle="Branding & Website"
          year="2021"
        >
          <Colophon
            activities="Product Design, Copywriting, Branding, Front-end Development"
            designers="Sérgio Fontes, Renata Motta, Juliana Carvalho, Filipe Soares"
          />

          <Slide bg="#ffcccc" shadow="medium">
            <Mockup
              name="preview_guava_1_mockup_1"
              left={-21.72}
              top={5.41}
              width={93.63}
              alt="The Guava software studio website — an “About us” hero with the red headline “A small & bold software studio.” beside a circular photo of the team at work."
            />
            <Mockup
              name="preview_guava_1_mockup_2"
              left={57.68}
              top={19.82}
              width={93.63}
              alt="Guava’s work page — “A productivity power-up,” a case study about helping Elétron Energy automate their operations, with a 3D illustration of stacked panels."
            />
          </Slide>

          <Slide bg="#f2f7c3" shadow="medium">
            {/* repeats the previous frame’s work page bleeding in for continuity → decorative */}
            <Mockup
              name="preview_guava_1_mockup_2"
              left={-48.13}
              top={19.82}
              width={93.63}
              alt=""
            />
            <Mockup
              name="preview_guava_2_mockup_3"
              left={23.03}
              top={-6.08}
              width={93.63}
              alt="Guava’s about page — the brand name “guava” formed from large three-dimensional letters on a green wall, under the line “A small & bold software studio.”"
            />
          </Slide>

          <Slide bg="#424242" shadow="medium">
            {/* repeats the previous frame’s about page bleeding in for continuity → decorative */}
            <Mockup
              name="preview_guava_2_mockup_3"
              left={-82.58}
              top={-6.08}
              width={93.63}
              alt=""
            />
            <Mockup
              name="preview_guava_3_mockup_4"
              left={3.18}
              top={16.22}
              width={93.63}
              alt="Guava’s process page — the headline “An immersive & adaptive process.” over a flowing line illustration on a coral background."
            />
          </Slide>
        </CasePreview>

        <CasePreview
          logo="tropical"
          name="Tropical Ruby"
          subtitle="Branding & Website"
          year="2015"
        >
          <Colophon
            activities="Product Design, Copywriting, Branding, Front-end Development"
            designers="Sérgio Fontes"
          />

          <Slide bg="#fff5cc" shadow="medium" fill>
            <Mockup
              name="preview_tropical_mockup_1"
              left={3.18}
              top={4.28}
              width={93.63}
              alt="The Tropical Ruby 2015 conference website — the home page with the diamond logo, featured speakers, the March 5–8 dates and Porto de Galinhas location, a newsletter sign-up, and rows of sponsors."
            />
          </Slide>

          <Slide bg="#cce6ea" shadow="medium" fill>
            <Mockup
              name="preview_tropical_mockup_2"
              left={3.18}
              top={4.28}
              width={93.63}
              alt="The conference schedule page — a four-day timeline and details for activities like a buggy ride and a raft-boat sail, plus talks and transfer information."
            />
          </Slide>

          <Slide bg="#c0e6e0" shadow="medium" fill>
            <Mockup
              name="preview_tropical_mockup_3"
              left={3.18}
              top={4.28}
              width={93.63}
              alt="Another section of the conference site — a Steve Klabnik testimonial calling it “Ruby on one of the most beautiful beaches in the world,” a “Remarks” block on transportation, lodging, food and weather, and an “About” summary."
            />
          </Slide>
        </CasePreview>
      </div>
    </section>
  );
}
