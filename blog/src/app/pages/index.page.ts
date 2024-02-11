import { Component } from '@angular/core';
import { CardComponent, SectionComponent } from '@blog-romain/ui';

@Component({
  selector: 'blog-index',
  standalone: true,
  imports: [CardComponent, SectionComponent],
  template: `
    <section class="bg-[#ffd699] p-5">
      <blog-romain-card>
        <h1>Bienvenu sur l'encyclopédie du livre "les destins croisées"</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ab deleniti dolores voluptatibus in nihil, repellendus vero doloribus
          voluptatem iste distinctio neque pariatur quia, iure mollitia nesciunt
          repellat est fuga
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates
          voluptas suscipit officiis quia! Eum sed veritatis impedit quam,
          nostrum dolorem dolor iure similique, perferendis velit doloremque
          quis sit minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          dolores quibusdam id vitae reiciendis assumenda vero esse, facere
          soluta iste ex dignissimos exercitationem architecto sit sed doloribus
          praesentium molestiae provident.
        </p>
      </blog-romain-card>
    </section>
    <blog-romain-section reverse="" />
    <section class="bg-white p-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      sapiente ipsum temporibus doloremque, perferendis dolores non quae! Cum
      atque, esse non maiores harum recusandae nam id consectetur ratione,
      dolores tempora?
    </section>

    <blog-romain-section />
    <section class="bg-[#ffd699] p-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      sapiente ipsum temporibus doloremque, perferendis dolores non quae! Cum
      atque, esse non maiores harum recusandae nam id consectetur ratione,
      dolores tempora?
    </section>
  `,
})
export default class IndexComponent {}
