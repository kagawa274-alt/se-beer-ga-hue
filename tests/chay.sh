#!/bin/bash
# Lệnh chạy bài kiểm tra tự động: bash quan-nhau-khuya/tests/chay.sh
DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$DIR")"
OUT="${TMPDIR:-/tmp}/quan-nhau-khuya-test.$$.js"

{
  echo 'ObjC.import("Foundation");'
  echo 'var __ROOT_DIR = '"\"$ROOT\""';'
  echo 'function docTep(tenTep) {'
  echo '  var duongDan = __ROOT_DIR + "/" + tenTep;'
  echo '  var nsStr = $.NSString.stringWithContentsOfFileEncodingError(duongDan, $.NSUTF8StringEncoding, null);'
  echo '  return (nsStr && nsStr.js) ? String(ObjC.unwrap(nsStr)) : "";'
  echo '}'
  [ -f "$ROOT/logic.js" ] && cat "$ROOT/logic.js" && echo
  echo 'var __log = []; console.log = function() { __log.push([].join.call(arguments, " ")); };'
  echo 'var ok = 0, fail = 0;'
  echo 'function kiemTra(ten, thucTe, mongMuon) {'
  echo '  if (JSON.stringify(thucTe) === JSON.stringify(mongMuon)) {'
  echo '    ok++; console.log("  ✓ " + ten);'
  echo '  } else {'
  echo '    fail++; console.log("  ✗ " + ten + "\n     Thực tế:   " + JSON.stringify(thucTe) + "\n     Mong muốn: " + JSON.stringify(mongMuon));'
  echo '  }'
  echo '}'

  for f in "$DIR"/*.test.js; do
    [ -f "$f" ] && cat "$f" && echo
  done

  echo 'console.log("\nTổng kết: " + ok + " đạt, " + fail + " lỗi");'
  echo '__log.join(String.fromCharCode(10));'
} > "$OUT"

RESULT="$(osascript -l JavaScript "$OUT" 2>&1)"
rm -f "$OUT"
echo "$RESULT"
LAST="$(echo "$RESULT" | tail -n 1)"
case "$LAST" in
  *" đạt, 0 lỗi") exit 0 ;;
  *) exit 1 ;;
esac
