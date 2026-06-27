import Button from "../button";
import CasePreview, {
  Mockup,
  Slide,
  VideoSlide,
  Colophon,
} from "./case_preview";

// Each gallery slide is a 534×444 frame of mockup PNGs (shadow baked into the asset)
// positioned in %; a Slide's `bg` shows through the gaps. Each mockup carries its own
// intrinsic `width`/`height` and frame-relative `left`/`top`/`size`. Content (subtitles,
// credits, summaries, alt text) lives here in the markup.
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

          <Slide bg="#f7dfcf">
            <Mockup
              name="preview_stone_mockup_2"
              width={186}
              height={381}
              left={1.5902}
              top={25.5776}
              size={34.4046}
              alt="Boni Burger’s online catalog home on a phone — a hero banner of burgers, the BB logo, a tagline with a “Visite nosso catálogo” button, and the shop’s address and opening hours."
            />
            <Mockup
              name="preview_stone_mockup_3"
              width={186}
              height={381}
              left={64.0902}
              top={25.5776}
              size={34.4046}
              alt="The catalog’s product list on a phone — a search field, the Burgers/Especiais/Acompanhamentos category tabs, and burger cards such as “Boni Clássico” (R$ 32,00) and “Boni Bacon” (R$ 36,00), each with a photo and short description."
            />
            <Mockup
              name="preview_stone_mockup_1"
              width={257}
              height={517}
              left={26.3078}
              top={9.6916}
              size={47.3686}
              alt="A product page on a phone — a large photo of the “Boni Clássico” burger, its R$ 32,00 price, the full ingredient list, and an add-to-cart button."
            />
          </Slide>

          <Slide bg="#f2e1e1">
            <Mockup
              name="preview_stone_mockup_sharing"
              width={506}
              height={661}
              left={2.5763}
              top={-41.2248}
              size={94.7468}
              alt="The catalog’s content shared across channels — Boni Burger’s “Boni Clássico” appearing in Instagram posts and stories, X posts, direct-message replies, and rich link previews of the store."
            />
          </Slide>

          <VideoSlide
            href="https://www.youtube.com/watch?v=J0cINzc2ziE"
            label="Watch the Online Catalog promotional video"
          >
            <Mockup
              name="video_promo"
              flat
              dir="catalog"
              scales={[1, 2]}
              width={533}
              height={309}
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

          <Slide bg="#f3f6e1">
            <Mockup
              name="preview_vtex_mockup_2"
              width={203}
              height={410}
              left={-1.1178}
              top={-6.2696}
              size={37.9054}
              alt="The FreshStore grocery app on a phone — the “Vegetables & Fruits” category with 192 items, filter chips, a sort control, and a “Go vegan for the month!” promotional banner."
            />
            <Mockup
              name="preview_vtex_mockup_3"
              width={203}
              height={410}
              left={31.0522}
              top={11.8004}
              size={37.9054}
              alt="The “Fruits” product list on a phone — cards for items like Organic Monalisa Potato and Black Seedless Grape, each showing its price, a unit selector, and an add button."
            />
            <Mockup
              name="preview_vtex_mockup_5"
              width={203}
              height={410}
              left={63.2122}
              top={29.0304}
              size={37.9054}
              alt="The cart summary on a phone — 27 items, substitution preferences, a free-shipping note, the running subtotal and savings, and a “Proceed to Checkout” button."
            />
          </Slide>

          <Slide bg="#f5f5f5">
            {/* annotated diagram (labels + leader lines), not a floating mockup */}
            <Mockup
              name="preview_vtex_specs"
              flat
              width={361}
              height={211}
              left={17.04}
              top={5.41}
              size={67.6}
              alt="An annotated breakdown of the web product card — labels pointing out the favourite, recurring-item and organic flags, the add-to-cart button, the price and promo tag, and the unit selector."
            />
            {/* reads as smaller cards within the frame */}
            <Mockup
              name="preview_vtex_cards"
              width={645}
              height={185}
              left={-8.2438}
              top={58.555}
              size={120.7072}
              alt="A row of web product cards in different states — default cards with an add button beside cards switched to a quantity stepper after being added, including “take 3, pay 2” promo tags."
            />
          </Slide>

          <Slide bg="#fceef2">
            <Mockup
              name="preview_vtex_mockup_8"
              width={203}
              height={410}
              left={-1.1178}
              top={11.7104}
              size={37.9054}
              alt="The delivery setup on a phone — a “Where do you want to receive your order?” dialog asking for a ZIP code over the dimmed store."
            />
            <Mockup
              name="preview_vtex_mockup_9"
              width={203}
              height={410}
              left={30.9922}
              top={11.7104}
              size={37.9054}
              alt="The same dialog with a ZIP code being typed — a “Use current location” option and matching ZIP suggestions appear above the keyboard."
            />
            <Mockup
              name="preview_vtex_mockup_10"
              width={203}
              height={410}
              left={63.1022}
              top={11.7104}
              size={37.9054}
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

          <Slide bg="#deedff" fill>
            <Mockup
              name="preview_petplate_mockup_1"
              width={641}
              height={472}
              left={-20.9886}
              top={4.5091}
              size={119.9948}
              alt="A PetPlate product page on the web — the “Chicken Apple Sausage Bites 4-Pack,” with its star rating, $30 price, quantity stepper, a “Buy 4-Pack” button, and a meal-plan add-on option."
            />
            <Mockup
              name="preview_petplate_mockup_2"
              width={225}
              height={452}
              left={-1.9754}
              top={17.3132}
              size={41.4105}
              alt="The same product on a phone — the “Chicken Apple Sausage Bites 4-Pack” page with its photo carousel, rating, and price."
            />
          </Slide>

          <Slide bg="#fff4cc" fill>
            <Mockup
              name="preview_petplate_mockup_4"
              width={620}
              height={472}
              left={-16.9188}
              top={4.509}
              size={116.0052}
              alt="A dog’s meal-plan dashboard on the PetPlate website — Momo the Samoyed’s profile and feeding needs, the current Meal Plan and next-box total, and the meals and treats included."
            />
          </Slide>

          <Slide bg="#deedff" fill>
            <Mockup
              name="preview_petplate_mockup_3"
              width={620}
              height={472}
              left={0.8712}
              top={4.509}
              size={116.0052}
              alt="The plan-switching dialog on the PetPlate website — comparing the recommended “Full Plan” against the “Topper Plan,” each with its calories, cadence, and price."
            />
          </Slide>

          <Slide bg="#fff4cc" fill>
            {/* the express-checkout cards read as smaller within the frame */}
            <Mockup
              name="preview_petplate_mockup_5"
              width={165}
              height={322}
              left={-7.3025}
              top={32.4347}
              size={30.7449}
              alt="The express checkout on a card — a “Welcome!” step asking the customer to pick a payment option, offering Apple Pay or credit card."
            />
            <Mockup
              name="preview_petplate_mockup_6"
              width={165}
              height={322}
              left={18.9175}
              top={21.3947}
              size={30.7449}
              alt="The checkout’s shipping-address step — a form for contact and address details above the payment-info section."
            />
            <Mockup
              name="preview_petplate_mockup_7"
              width={195}
              height={378}
              left={42.3212}
              top={9.6901}
              size={36.3577}
              alt="The “Review Your Order” step — the shipping address, payment info, and an order summary totaling $30, with a “Finish Order” button."
            />
            <Mockup
              name="preview_petplate_mockup_8"
              width={205}
              height={395}
              left={67.6058}
              top={-1.3552}
              size={38.2288}
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

          <Slide bg="#ffcccc">
            <Mockup
              name="preview_guava_1_mockup_1"
              width={512}
              height={378}
              left={-22.8437}
              top={5.1844}
              size={95.8771}
              alt="The Guava software studio website — an “About us” hero with the red headline “A small & bold software studio.” beside a circular photo of the team at work."
            />
            <Mockup
              name="preview_guava_1_mockup_2"
              width={542}
              height={434}
              left={53.7471}
              top={18.9188}
              size={101.4949}
              alt="Guava’s work page — “A productivity power-up,” a case study about helping Elétron Energy automate their operations, with a 3D illustration of stacked panels."
            />
          </Slide>

          <Slide bg="#f2f7c3">
            {/* repeats the previous frame’s work page bleeding in for continuity → decorative */}
            <Mockup
              name="preview_guava_1_mockup_2"
              width={542}
              height={434}
              left={-52.0629}
              top={18.9188}
              size={101.4949}
              alt=""
            />
            <Mockup
              name="preview_guava_2_mockup_3"
              width={542}
              height={434}
              left={19.0971}
              top={-6.9812}
              size={101.4949}
              alt="Guava’s about page — the brand name “guava” formed from large three-dimensional letters on a green wall, under the line “A small & bold software studio.”"
            />
          </Slide>

          <Slide bg="#424242">
            {/* repeats the previous frame’s about page bleeding in for continuity → decorative */}
            <Mockup
              name="preview_guava_2_mockup_3"
              width={542}
              height={434}
              left={-86.5129}
              top={-6.9812}
              size={101.4949}
              alt=""
            />
            <Mockup
              name="preview_guava_3_mockup_4"
              width={512}
              height={373}
              left={2.0563}
              top={15.9949}
              size={95.8771}
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

          <Slide bg="#fff5cc" fill>
            <Mockup
              name="preview_tropical_mockup_1"
              width={542}
              height={537}
              left={-0.7529}
              top={3.379}
              size={101.4949}
              alt="The Tropical Ruby 2015 conference website — the home page with the diamond logo, featured speakers, the March 5–8 dates and Porto de Galinhas location, a newsletter sign-up, and rows of sponsors."
            />
          </Slide>

          <Slide bg="#cce6ea" fill>
            <Mockup
              name="preview_tropical_mockup_2"
              width={542}
              height={537}
              left={-0.7529}
              top={3.379}
              size={101.4949}
              alt="The conference schedule page — a four-day timeline and details for activities like a buggy ride and a raft-boat sail, plus talks and transfer information."
            />
          </Slide>

          <Slide bg="#c0e6e0" fill>
            <Mockup
              name="preview_tropical_mockup_3"
              width={542}
              height={537}
              left={-0.7529}
              top={3.379}
              size={101.4949}
              alt="Another section of the conference site — a Steve Klabnik testimonial calling it “Ruby on one of the most beautiful beaches in the world,” a “Remarks” block on transportation, lodging, food and weather, and an “About” summary."
            />
          </Slide>
        </CasePreview>
      </div>
    </section>
  );
}
