const DATA_KEY = 'CHAMPIONS_IAPE_DATA';

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'load';
  if (action === 'load') return json_({ data: readData_() });
  return json_({ ok: true });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (body.action === 'save' && body.data) {
      PropertiesService.getScriptProperties().setProperty(DATA_KEY, JSON.stringify(body.data));
      return json_({ ok: true, savedAt: new Date().toISOString() });
    }
    return json_({ ok: false, error: 'Ação inválida.' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function readData_() {
  const raw = PropertiesService.getScriptProperties().getProperty(DATA_KEY);
  return raw ? JSON.parse(raw) : null;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
