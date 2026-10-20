# SPDX-License-Identifier: LGPL-2.1-or-later
"""Generate the 1200x630 social preview image."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


W, H = 1200, 630
BG = (8, 8, 8)
TEXT = (233, 240, 247)
MUTED = (155, 176, 198)
BLUE = (255, 122, 24)
AMBER = (255, 179, 71)
GREEN = (70, 194, 141)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


def main() -> None:
    image = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(image)

    for x in range(0, W, 48):
        draw.line([(x, 0), (x, H)], fill=(28, 16, 6), width=1)
    for y in range(0, H, 48):
        draw.line([(0, y), (W, y)], fill=(28, 16, 6), width=1)

    draw.ellipse([-180, -220, 420, 260], fill=(20, 10, 3))
    draw.ellipse([820, 300, 1380, 860], fill=(42, 20, 6))

    logo_path = Path(__file__).with_name("assets") / "logo-horizontal.png"
    logo = Image.open(logo_path).convert("RGBA")
    target_height = 84
    logo = logo.resize((int(logo.width * target_height / logo.height), target_height), Image.LANCZOS)
    image.paste(logo, (72, 54), logo)

    draw.text((72, 224), "Learn CAD without", font=font("segoeuib.ttf", 62), fill=TEXT)
    draw.text((72, 292), "drowning in menus.", font=font("segoeuib.ttf", 62), fill=AMBER)

    draw.text(
        (74, 388),
        "Constraints first. One real part at a time. A senior engineer in the room.",
        font=font("segoeui.ttf", 24),
        fill=MUTED,
    )

    pills = ["FreeCAD 1.1+", "Windows", "Local-first", "Free"]
    x = 74
    for label in pills:
        width = draw.textlength(label, font=font("segoeuisl.ttf", 18))
        draw.rounded_rectangle([x, 474, x + width + 28, 512], radius=19, outline=(120, 62, 20), width=1)
        draw.text((x + 14, 482), label, font=font("segoeuisl.ttf", 18), fill=TEXT)
        x += int(width) + 44

    draw.rounded_rectangle([840, 190, 1130, 466], radius=18, outline=(120, 62, 20), width=2, fill=(16, 12, 9))
    draw.text((866, 218), "LearnCad", font=font("segoeuib.ttf", 22), fill=TEXT)
    draw.rounded_rectangle([1000, 214, 1104, 246], radius=16, fill=(60, 32, 8))
    draw.text((1014, 221), "Needs work", font=font("segoeuisl.ttf", 14), fill=AMBER)
    draw.text((866, 268), "DO THIS NEXT", font=font("segoeuib.ttf", 12), fill=MUTED)
    draw.text((866, 292), "Add the mounting holes.", font=font("segoeuib.ttf", 19), fill=TEXT)
    draw.text((866, 322), "Then verify the edge distance.", font=font("segoeui.ttf", 16), fill=MUTED)
    draw.rounded_rectangle([866, 362, 1104, 402], radius=7, fill=BLUE)
    draw.text((892, 372), "Open the Hole dialog", font=font("segoeuib.ttf", 16), fill=TEXT)
    draw.text((866, 424), "Sketch: 0 DoF, closed", font=font("segoeui.ttf", 15), fill=GREEN)
    draw.text((866, 446), "Body: 40 x 20 x 10 mm", font=font("segoeui.ttf", 15), fill=MUTED)

    out = Path(__file__).with_name("assets") / "og-image.png"
    out.parent.mkdir(parents=True, exist_ok=True)
    image.save(out, format="PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
