const d = new Date();
import Text from "./common/Text";

export default function Footer() {
  return (
    <div className="centered-block py-10">
      <Text className="text-center text-sm">
        &copy; {d.getFullYear()} Taylor Chance. All rights reserved.
      </Text>
    </div>
  );
}
