import Heading from "./common/Heading";
import Text from "./common/Text";

export default function Contact() {
  return (
    <div
      className="centered-block flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24"
      id="contact"
    >
      <Heading className="mb-3">Contact</Heading>
      <Text className="mb-3 text-center text-lg">
        Hit me up if you&apos;re interested in working together.
      </Text>
      <Text className="mb-3 font-semibold">
        <a href="mailto:taylorchance@gmail.com">taylorchance@gmail.com</a>
      </Text>
    </div>
  );
}
