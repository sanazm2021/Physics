class LList {
    constructor() {
        this.size = 0;
        this.head = new Node();
    }
    get(idx) {
        if (idx < 0 || idx >= this.size) {
            throw "IndexOutOfBoundsException";
        }
        var curr = this.head.next;
        var i;
        for (i = 0; i < idx; i++) {
            if (curr != null) {
                curr = curr.getNext();
            }
        }
        if (curr != null) {
            return curr.getData();
                                      
        }
        return null;

    }
    add(i, t) {
        var curr = this.head;
        var toAdd = new Node(t, null);
        console.log(i, this.size); 
        if (i < 0 || i > this.size) {
            throw "IndexOutOfBoundsException";
        }
        else {
            for (var j = 0; j < i; j++) {
                curr = curr.getNext();
            }
            toAdd.setNext(curr.getNext());
            curr.setNext(toAdd);
            this.size++;
        }
    }
}
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    getData() {
        return this.data;
    }
    getNext() {
        return this.next;
    }
    setNext(next) {
        this.next = next;
    }
}
var funfacts = new LList; 
funfacts.add(0,"If you traveled at the speed of light, time would stop. According to Einstein’s Theory of Special Relativity, the faster you go, the slower time passes for you relative to your surroundings. Seriously—if you zip around in a Ferrari for an hour, you’ll have aged ever-so-slightly less than if you had just chilled at home on the computer. The extra nanoseconds you get out of it might not be worth the price of gas, but hey, it’s an option. Now, before you whip up a get-immortal-quick scheme, note that moving at the speed of light isn’t actually possible, unless you happen to be made of light. Technically speaking, moving that fast would require an infinite amount of energy (and frankly, not even a Chihuahua has that much energy). ");
funfacts.add(1, "Our sun bends light. Affected by gravity, the path of a beam of light is not entirely straight. So if a beam of light from a distant star passes close to our sun, it will actually bend slightly around it. The effect on an observer, like us, is that we see stars in different spots than they are actually located.");
funfacts.add(2, "The amount of total mass in the universe is vastly greater than the mass we can actually account for. Physicists developed an explanation for this, and the leading theory right now is that dark matter—a mysterious substance that emits no light—accounts for the missing mass. Dark matter and dark energy account for approximately 95% of the mass in the universe." )
funfacts.add(3,"The Big Bang Theory was an important explanation for the origin of our universe. Basically, the universe started as an explosion. Debris (planets, stars, etc) was flung around in all directions, driven by the enormous energy of the blast. Because all of this debris is so heavy, we would expect this explosion to slow down after a while. Here’s the catch: it hasn’t slowed down at all. In fact, the universe is expanding faster over time. This as crazy as if you threw a baseball that kept getting faster and faster, never falling back to the ground. The prevailing explanation for this is that force exerted by dark matter and energy is propelling cosmic expansion.")
funfacts.add(4,"The most abundant atom in the universe is the hydrogen atom. Nearly 74% of the atoms in the Milky Way galaxy are hydrogen atoms.")
funfacts.add(5,"Electrons behave differently when it’s being observed. That’s right, The mere act of observation can completely change the outcome of an event! In the famous Double Slit Experiment, researches proved that hen a camera observes electrons, they act as particles. However, when the no equipment is used to observe the electrons, they act as waves and particles simultaneously. There’s enormous disagreement and lack of certainty as to why this occurs.")
funfacts.add(6,"All objects fall at the same speed. You would be forgiven for assuming that heavier objects fall faster than lighter ones—it sounds like common sense, and besides, a bowling ball drops more quickly than a feather. But really the force of gravity pulls the objects toward the center of the earth at precisely the same speed. It’s air resistance that accounts for the feather’s slower flight. This means that if you repeated the feather vs. bowling ball experiment on the moon (which has no atmosphere), they would hit the ground at the exact same time.")
funfacts.add(7,"Apparently all the matter that makes up the human race could fit in a sugar cube. That’s right. Everyone you’ve ever known… everyone who’s ever lived, for that matter… all of us could be squashed into a little hunk of matter about half-an-inch on each side, if only you reduced us down to our basic components. Atoms are, after all, 99.9999999999999 percent empty space. ")
funfacts.add(7,"Black holes aren’t black. They’re very dark, sure, but they aren’t black. They glow, slightly, giving off light across the whole spectrum, including visible light. This radiation is called “Hawking radiation” after the former Lucasian Professor of Mathematics at Cambridge University Stephen Hawking, who first proposed its existence. Because black holes are constantly giving off this radiation, and therefore losing mass, they will eventually evaporate if they don’t have another source of mass to sustain them.")
funfacts.add(8,"The faster you move, the heavier you get. However, this is negligible at human speeds – even Usain Bolt is not noticeably heavier when running than when still – but once you reach an appreciable fraction of the speed of light, your mass increases rapidly.")
funfacts.add(9,"Weight (force of gravity) decreases as you move away from the earth. This is because, although we don’t tend to think about it much during our lives on Earth, weight is not actually an objective measurement of how much matter a thing contains—that’s what we have mass for. Weight is a measurement of how much gravity something experiences, which is a function of what other bodies are surrounding said object, and how they themselves respond to gravity.")
funfacts.add(10,"Planets don’t actually travel in a circular motion. They orbit suns because space-time itself is bent. This is because, in a sense, gravity actually bends the fabric of the universe.")
funfacts.add(11,"The Sun and the planets are staying approximately the same distance apart and have been in roughly the same places for several billion years. The planets currently lie in a perfect balance that results in each planet moving fast enough to not be pulled closer to the Sun, but not too fast that it moves away from the Sun and launches of the Solar System.")
funfacts.add(12,"Saturn would float if you put it in water. Technically, this is true since Saturn, which is composed mostly of gas, is much less dense than water. ")
funfacts.add(12,"Although atoms are the smallest unit of an element, they consist of even tinier particles called quarks and leptons. An electron is a lepton. Protons and neutrons consist of three quarks each.")
funfacts.add(13,"The Uncertainty Principle, or the Heisenberg’s Uncertainty Principle, is one of the most famous and misunderstood ideas in physics. It states that the position and momentum of a particle cannot be simultaneously measured with high precision. In layman’s terms, this means that there is a fuzziness in nature, a fundamental limit to what we can know about the behaviour of particles and, therefore, nature. This radical principle caused many physicists to change their goal. Many physicists acknowledge that the goal of modern physics is no longer to understand the nature of the universe entirely, but rather to understand it within the limits of the Uncertainty Principle.")
funfacts.add(14,"If you place a pinhead-sized piece of the Sun’s core on the Earth, you will die from standing within 145 km (90 miles) from it. Why? Basically, it contains a ton of energy, and it’ll blow up like a nuclear bomb. ")
funfacts.add(15,"Space is not a complete vacuum. There are about 3 atoms per cubic meter of space. Massive understatement of the century: that’s not a lot. To put it in perspective, at sea level, there are approximately 2.5 x 10^25 air molecules in a cubic meter of air. That’s 250,000,000,000,000,000,000,000,000 atoms.")
funfacts.add(16,"Neutron stars are so dense that a teaspoon of them would be equal to the weight of Earth’s entire population. ")
funfacts.add(17,"Neutron stars are the fastest spinning objects known in the universe. Pulsars are a particular type of neutron star that emits a beam of radiation that can be observed as a pulse of light. The rate of this pulse allows astronomers to measure the rotation. The fastest spinning known pulsar is the catchily-titled PSR J1748-2446ad, which spins at over 70,000 kilometres per second.")
funfacts.add(18,"Dying stars create black holes. Our Sun is going to end its life quietly. When its nuclear fuel burns out, it’ll slowly fade into a white dwarf. That’s not the case for far more massive stars. Let’s say you have a star that’s about 20 times more massive than the Sun. When this monster runs out of fuel, gravity violently overwhelms and collapses the core and other layers are flung into space. This is called a supernova. The remaining core collapses into a singularity — a spot of infinitely dense mass and almost no volume. That’s another name for a black hole.")
console.log(funfacts.get(Math.floor((Math.random())*funfacts.size)));
